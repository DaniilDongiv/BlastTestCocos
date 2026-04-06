import TileRenderer from './TileRenderer';
import { GameConfig } from '../config/GameConfig';
import { Grid } from '../core/Grid';
import {
    CellData, GridPosition, GravityMove, SpawnedTile,
    SuperTileType,
} from '../core/Types';

const { ccclass } = cc._decorator;

type EffectAnimator = (center: GridPosition, positions: GridPosition[]) => Promise<void>;

@ccclass
export default class FieldRenderer extends cc.Component {

    private readonly effectAnimators = new Map<SuperTileType, EffectAnimator>();

    private nodes     = Grid.filled<cc.Node | null>(0, 0, null);
    private renderers = Grid.filled<TileRenderer | null>(0, 0, null);

    private colorSprites: cc.SpriteFrame[] = [];
    private superSprites = new Map<SuperTileType, cc.SpriteFrame>();

    private cellW   = 0;
    private cellH   = 0;
    private originX = 0;
    private originY = 0;

    private onCellClick: ((row: number, col: number) => void) | null = null;

    public init(
        rows: number,
        cols: number,
        colorSprites: cc.SpriteFrame[],
        superSprites: Map<SuperTileType, cc.SpriteFrame>,
        onClick: (row: number, col: number) => void,
    ): void {
        this.colorSprites = colorSprites;
        this.superSprites = superSprites;
        this.onCellClick  = onClick;

        this.cellW = GameConfig.TILE_WIDTH  + GameConfig.CELL_GAP;
        this.cellH = GameConfig.TILE_HEIGHT + GameConfig.CELL_GAP;

        const gridW = cols * this.cellW - GameConfig.CELL_GAP;
        const gridH = rows * this.cellH - GameConfig.CELL_GAP;
        this.originX = -gridW / 2 + GameConfig.TILE_WIDTH  / 2;
        this.originY = -gridH / 2 + GameConfig.TILE_HEIGHT / 2;

        this.nodes     = Grid.filled(rows, cols, null);
        this.renderers = Grid.filled(rows, cols, null);

        this.initEffectAnimators();
        this.node.on(cc.Node.EventType.TOUCH_END, this.handleTouch, this);
    }

    private initEffectAnimators(): void {
        this.effectAnimators.set(SuperTileType.RowClear,    (c, p) => this.animateRowClear(c, p));
        this.effectAnimators.set(SuperTileType.ColumnClear, (c, p) => this.animateColumnClear(c, p));
        this.effectAnimators.set(SuperTileType.RadiusBomb,  (c, p) => this.animateBombBlast(c, p));
        this.effectAnimators.set(SuperTileType.FieldClear,  (c, p) => this.animateFieldClear(c, p));
    }

    public async animateSuperEffect(
        type: SuperTileType,
        center: GridPosition,
        positions: GridPosition[],
    ): Promise<void> {
        const animator = this.effectAnimators.get(type);
        if (animator) await animator(center, positions);
        else          await this.animateDestroy(positions);
    }

    public cellPos(row: number, col: number): cc.Vec2 {
        return cc.v2(
            this.originX + col * this.cellW,
            this.originY + row * this.cellH,
        );
    }

    public createAllTiles(grid: Grid<CellData | null>): void {
        grid.forEach((cell, r, c) => {
            if (cell) this.makeTile(r, c, cell);
        });
    }

    public clearAllTiles(): void {
        const { rows, cols } = this.nodes;
        for (let r = 0; r < rows; r++)
            for (let c = 0; c < cols; c++)
                this.killTile(r, c);
    }

    public placeSuperTile(row: number, col: number, cell: CellData): void {
        this.killTile(row, col);
        this.makeTile(row, col, cell);
    }

    public rebuildInstant(grid: Grid<CellData | null>): void {
        this.clearAllTiles();
        this.createAllTiles(grid);
    }

    public async animateDestroy(positions: GridPosition[]): Promise<void> {
        const tasks: Promise<void>[] = [];
        for (const pos of positions) {
            const r = this.renderers.get(pos.row, pos.col);
            if (r) tasks.push(r.playDestroy(GameConfig.DESTROY_DURATION));
        }
        await Promise.all(tasks);
        for (const pos of positions) this.killTile(pos.row, pos.col);
    }

    public async animateBombBlast(center: GridPosition, positions: GridPosition[]): Promise<void> {
        const waveDelay  = GameConfig.BOMB_WAVE_DELAY_PER_DIST;
        const flashDur   = GameConfig.BOMB_FLASH_DURATION;
        const shrinkDur  = GameConfig.BOMB_SHRINK_DURATION;
        const flashScale = GameConfig.BOMB_FLASH_SCALE;

        const tasks: Promise<void>[] = [];
        for (const pos of positions) {
            const n = this.nodes.get(pos.row, pos.col);
            if (!n) continue;

            const dist  = Math.abs(pos.row - center.row) + Math.abs(pos.col - center.col);
            const delay = dist * waveDelay;

            tasks.push(new Promise<void>(resolve => {
                cc.tween(n)
                    .delay(delay)
                    .to(flashDur, { scale: flashScale }, { easing: 'backOut' })
                    .to(shrinkDur, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                    .call(() => resolve())
                    .start();
            }));
        }
        await Promise.all(tasks);
        for (const pos of positions) this.killTile(pos.row, pos.col);
    }

    public async animateRowClear(center: GridPosition, positions: GridPosition[]): Promise<void> {
        const cfg = GameConfig;
        const { rows, cols } = this.nodes;

        const beamY = this.cellPos(center.row, 0).y;
        const fullW = cols * this.cellW + cfg.TILE_WIDTH;
        this.makeBeam(0, beamY, fullW, cfg.LINE_BEAM_HEIGHT, true);

        const tasks: Promise<void>[] = [];
        for (const pos of positions) {
            const n = this.nodes.get(pos.row, pos.col);
            if (!n) continue;

            const dist  = Math.abs(pos.col - center.col);
            const delay = dist * cfg.LINE_SWEEP_DELAY_PER_CELL;
            const dir   = pos.col >= center.col ? 1 : -1;

            tasks.push(new Promise<void>(resolve => {
                cc.tween(n)
                    .delay(delay)
                    .to(cfg.LINE_STRETCH_DUR,
                        { scaleX: 1.5, scaleY: 0.55 },
                        { easing: 'backOut' })
                    .to(cfg.LINE_SHRINK_DUR,
                        { scale: 0, opacity: 0, angle: 20 * dir } as any,
                        { easing: 'sineIn' })
                    .call(() => resolve())
                    .start();
            }));
        }

        await Promise.all(tasks);
        for (const pos of positions) this.killTile(pos.row, pos.col);
    }

    public async animateColumnClear(center: GridPosition, positions: GridPosition[]): Promise<void> {
        const cfg = GameConfig;
        const { rows, cols } = this.nodes;

        const beamX = this.cellPos(0, center.col).x;
        const fullH = rows * this.cellH + cfg.TILE_HEIGHT;
        this.makeBeam(beamX, 0, cfg.LINE_BEAM_HEIGHT, fullH, false);

        const tasks: Promise<void>[] = [];
        for (const pos of positions) {
            const n = this.nodes.get(pos.row, pos.col);
            if (!n) continue;

            const dist  = Math.abs(pos.row - center.row);
            const delay = dist * cfg.LINE_SWEEP_DELAY_PER_CELL;
            const dir   = pos.row >= center.row ? 1 : -1;

            tasks.push(new Promise<void>(resolve => {
                cc.tween(n)
                    .delay(delay)
                    .to(cfg.LINE_STRETCH_DUR,
                        { scaleX: 0.55, scaleY: 1.5 },
                        { easing: 'backOut' })
                    .to(cfg.LINE_SHRINK_DUR,
                        { scale: 0, opacity: 0, angle: 20 * dir } as any,
                        { easing: 'sineIn' })
                    .call(() => resolve())
                    .start();
            }));
        }

        await Promise.all(tasks);
        for (const pos of positions) this.killTile(pos.row, pos.col);
    }

    public async animateFieldClear(center: GridPosition, positions: GridPosition[]): Promise<void> {
        const cfg = GameConfig;
        const tasks: Promise<void>[] = [];

        for (const pos of positions) {
            const n = this.nodes.get(pos.row, pos.col);
            if (!n) continue;

            const dist  = Math.abs(pos.row - center.row) + Math.abs(pos.col - center.col);
            const delay = dist * cfg.FIELD_CLEAR_DELAY_PER_DIST;

            tasks.push(new Promise<void>(resolve => {
                cc.tween(n)
                    .delay(delay)
                    .to(cfg.FIELD_CLEAR_FLASH_DUR,
                        { scale: 1.35 },
                        { easing: 'backOut' })
                    .to(cfg.FIELD_CLEAR_SHRINK_DUR,
                        { scale: 0, opacity: 0 },
                        { easing: 'backIn' })
                    .call(() => resolve())
                    .start();
            }));
        }

        await Promise.all(tasks);
        for (const pos of positions) this.killTile(pos.row, pos.col);
    }

    private makeBeam(
        x: number, y: number,
        w: number, h: number,
        horizontal: boolean,
    ): cc.Node {
        const cfg = GameConfig;
        const beam = new cc.Node('Beam');
        beam.parent  = this.node;
        beam.zIndex  = 9998;
        beam.setPosition(x, y);
        beam.opacity = 220;

        if (horizontal) { beam.scaleX = 0; beam.scaleY = 1; }
        else            { beam.scaleX = 1; beam.scaleY = 0; }

        const gfx = beam.addComponent(cc.Graphics);
        gfx.fillColor = cc.color(255, 255, 160, 220);
        gfx.rect(-w / 2, -h / 2, w, h);
        gfx.fill();

        const expandProp = horizontal ? { scaleX: 1 } : { scaleY: 1 };
        const fadeProp   = horizontal
            ? { opacity: 0, scaleY: 4 }
            : { opacity: 0, scaleX: 4 };

        cc.tween(beam)
            .to(cfg.LINE_BEAM_EXPAND_DUR, expandProp as any, { easing: 'sineOut' })
            .to(cfg.LINE_BEAM_FADE_DUR,   fadeProp  as any, { easing: 'sineOut' })
            .call(() => beam.destroy())
            .start();

        return beam;
    }

    public async animateGravity(moves: GravityMove[]): Promise<void> {
        const tasks: Promise<void>[] = [];
        for (const m of moves) {
            const n = this.nodes.get(m.from.row, m.from.col);
            const r = this.renderers.get(m.from.row, m.from.col);
            if (!n || !r) continue;

            this.nodes.set(m.to.row, m.to.col, n);
            this.renderers.set(m.to.row, m.to.col, r);
            this.nodes.set(m.from.row, m.from.col, null);
            this.renderers.set(m.from.row, m.from.col, null);

            const target = this.cellPos(m.to.row, m.to.col);
            const dist   = m.from.row - m.to.row;
            tasks.push(r.playFall(target.y, dist * GameConfig.FALL_DURATION_PER_CELL));
        }
        await Promise.all(tasks);
    }

    public async animateSpawn(spawned: SpawnedTile[]): Promise<void> {
        const tasks: Promise<void>[] = [];
        for (const s of spawned) {
            const target = this.cellPos(s.position.row, s.position.col);
            const startY = target.y + s.fallDistance * this.cellH;

            const n = this.makeTile(s.position.row, s.position.col, s.cell);
            if (!n) continue;
            n.y = startY; n.scale = 1; n.opacity = 255;

            const r = this.renderers.get(s.position.row, s.position.col);
            if (r) tasks.push(r.playFall(target.y, s.fallDistance * GameConfig.FALL_DURATION_PER_CELL));
        }
        await Promise.all(tasks);
    }

    public async animateSingleSpawn(row: number, col: number): Promise<void> {
        const r = this.renderers.get(row, col);
        if (r) await r.playSpawn(GameConfig.SPAWN_DURATION);
    }

    public async animateSwap(a: GridPosition, b: GridPosition): Promise<void> {
        const ra = this.renderers.get(a.row, a.col);
        const rb = this.renderers.get(b.row, b.col);
        if (!ra || !rb) return;

        const pa = this.cellPos(b.row, b.col);
        const pb = this.cellPos(a.row, a.col);
        this.swapRefs(a, b);

        await Promise.all([
            ra.playMoveTo(pa, GameConfig.SWAP_DURATION),
            rb.playMoveTo(pb, GameConfig.SWAP_DURATION),
        ]);
    }

    public async animateShuffle(grid: Grid<CellData | null>): Promise<void> {
        await this.animateAllScale(0, GameConfig.SHUFFLE_HALF_DURATION);
        this.clearAllTiles();
        this.createAllTiles(grid);
        this.forEachNode(n => { n.scale = 0; });
        await this.animateAllScale(1, GameConfig.SHUFFLE_HALF_DURATION);
    }

    public async animateInitialAppearance(): Promise<void> {
        const colDelay = GameConfig.CASCADE_COL_DELAY;
        const rowDelay = GameConfig.CASCADE_ROW_DELAY;
        const fallDur  = GameConfig.CASCADE_FALL_DURATION;
        const offsetY  = GameConfig.CASCADE_START_OFFSET_Y;
        const { rows, cols } = this.nodes;

        this.nodes.forEach((n) => {
            if (!n) return;
            n.y      += offsetY;
            n.scale   = 0.5;
            n.opacity = 0;
        });

        const tasks: Promise<void>[] = [];

        for (let c = 0; c < cols; c++) {
            for (let r = rows - 1; r >= 0; r--) {
                const n = this.nodes.get(r, c);
                if (!n) continue;

                const target = this.cellPos(r, c);
                const delay  = c * colDelay + (rows - 1 - r) * rowDelay;

                tasks.push(new Promise<void>(resolve => {
                    cc.tween(n)
                        .delay(delay)
                        .call(() => { n.opacity = 255; })
                        .to(fallDur, { y: target.y, scale: 1 }, { easing: 'bounceOut' })
                        .call(() => resolve())
                        .start();
                }));
            }
        }

        await Promise.all(tasks);
    }

    public async animateDismissAll(): Promise<void> {
        await this.animateAllScale(0, GameConfig.DISMISS_DURATION);
    }

    public showFloatingScore(
        row: number, col: number, amount: number, font: cc.Font | null,
    ): void {
        const pos = this.cellPos(row, col);

        const n = new cc.Node('ScorePopup');
        n.parent  = this.node;
        n.zIndex  = 9999;
        n.setPosition(pos.x, pos.y + 20);
        n.scale   = 0.4;
        n.opacity = 255;

        const label        = n.addComponent(cc.Label);
        label.string       = `+${amount}`;
        label.fontSize     = GameConfig.SCORE_POPUP_FONT_SIZE;
        label.lineHeight   = GameConfig.SCORE_POPUP_FONT_SIZE + 4;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.verticalAlign   = cc.Label.VerticalAlign.CENTER;
        if (font) {
            label.font          = font;
            label.useSystemFont = false;
        }

        n.color = cc.color(255, 245, 60);

        const growDur  = GameConfig.SCORE_POPUP_GROW_DURATION;
        const floatDur = GameConfig.SCORE_POPUP_FLOAT_DURATION;
        const floatY   = pos.y + 20 + GameConfig.SCORE_POPUP_FLOAT_Y;

        cc.tween(n)
            .to(growDur, { scale: 1.15 }, { easing: 'backOut' })
            .to(floatDur, { y: floatY, opacity: 0, scale: 0.85 }, { easing: 'sineOut' })
            .call(() => n.destroy())
            .start();
    }

    public setTileHighlight(row: number, col: number, on: boolean): void {
        const r = this.renderers.get(row, col);
        if (r) r.setHighlight(on);
    }

    public clearAllHighlights(): void {
        this.renderers.forEach(r => {
            if (r) r.setHighlight(false);
        });
    }

    private handleTouch(e: cc.Event.EventTouch): void {
        if (!this.onCellClick) return;
        const local = this.node.convertToNodeSpaceAR(e.getLocation());
        const { rows, cols } = this.nodes;

        const col = Math.round((local.x - this.originX) / this.cellW);
        const row = Math.round((local.y - this.originY) / this.cellH);
        if (row < 0 || row >= rows || col < 0 || col >= cols) return;

        const c = this.cellPos(row, col);
        if (Math.abs(local.x - c.x) > GameConfig.TILE_WIDTH  / 2) return;
        if (Math.abs(local.y - c.y) > GameConfig.TILE_HEIGHT / 2) return;

        this.onCellClick(row, col);
    }

    private makeTile(row: number, col: number, cell: CellData): cc.Node | null {
        const sf = this.resolveSprite(cell);
        if (!sf) return null;

        const n = new cc.Node(`Tile_${row}_${col}`);
        n.parent = this.node;
        const p = this.cellPos(row, col);
        n.setPosition(p.x, p.y);

        const r = n.addComponent(TileRenderer);
        r.init(sf);

        this.nodes.set(row, col, n);
        this.renderers.set(row, col, r);
        return n;
    }

    private killTile(row: number, col: number): void {
        const n = this.nodes.get(row, col);
        if (n) {
            n.destroy();
            this.nodes.set(row, col, null);
            this.renderers.set(row, col, null);
        }
    }

    private swapRefs(a: GridPosition, b: GridPosition): void {
        this.nodes.swap(a.row, a.col, b.row, b.col);
        this.renderers.swap(a.row, a.col, b.row, b.col);
    }

    private resolveSprite(cell: CellData): cc.SpriteFrame | null {
        if (cell.superType !== SuperTileType.None)
            return this.superSprites.get(cell.superType) || null;
        return this.colorSprites[cell.color] || null;
    }

    private async animateAllScale(target: number, dur: number): Promise<void> {
        const tasks: Promise<void>[] = [];
        this.forEachNode(n => {
            tasks.push(new Promise<void>(res => {
                cc.tween(n).to(dur, { scale: target }).call(() => res()).start();
            }));
        });
        await Promise.all(tasks);
    }

    private forEachNode(fn: (n: cc.Node) => void): void {
        this.nodes.forEach(n => { if (n) fn(n); });
    }

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_END, this.handleTouch, this);
    }
}
