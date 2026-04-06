import { GameConfig }          from './config/GameConfig';
import { FieldModel }          from './core/FieldModel';
import { GameSession }         from './core/GameSession';
import {
    BoosterType, CellData, GridPosition, SuperTileType,
}                              from './core/Types';
import { SuperTileResolver }   from './strategies/SuperTileStrategy';
import {
    IInputContext, IInputState,
    IdleState, LockedState,
}                              from './input/InputState';
import FieldRenderer           from './rendering/FieldRenderer';
import { HUDPresenter }        from './rendering/HUDPresenter';
import { ResultPopup }         from './rendering/ResultPopup';

const { ccclass, property } = cc._decorator;

@ccclass('BlastGame')
export default class BlastGame extends cc.Component implements IInputContext {

    @property({ type: [cc.SpriteFrame] })
    tileSprites: cc.SpriteFrame[] = [];

    @property({ type: cc.SpriteFrame })
    superRowSprite: cc.SpriteFrame = null!;

    @property({ type: cc.SpriteFrame })
    superColSprite: cc.SpriteFrame = null!;

    @property({ type: cc.SpriteFrame })
    superBombSprite: cc.SpriteFrame = null!;

    @property({ type: cc.SpriteFrame })
    superFieldSprite: cc.SpriteFrame = null!;

    @property({ type: cc.Font })
    gameFont: cc.Font = null!;

    @property(cc.Button)
    bombButton: cc.Button = null!;

    @property(cc.Button)
    teleportButton: cc.Button = null!;

    private field:    FieldModel    = null!;
    private session:  GameSession   = null!;
    private renderer: FieldRenderer = null!;
    private hud:      HUDPresenter  = null!;
    private popup:    ResultPopup   = null!;

    private inputState: IInputState = new LockedState();

    // Click Events handlers for cc.Button (bound via inspector)
    public onBombClicked(_event?: cc.Event, _data?: string): void {
        this.inputState.onBoosterBombClick(this);
    }

    public onTeleportClicked(_event?: cc.Event, _data?: string): void {
        this.inputState.onBoosterTeleportClick(this);
    }

    protected onLoad(): void {
        this.initSystems();
    }

    protected start(): void {
        this.beginGame();
    }

    protected update(dt: number): void {
        this.hud.update(dt);
    }

    private initSystems(): void {
        this.field   = new FieldModel();
        this.session = new GameSession();

        this.wireRenderer();
        this.wireHUD();
        this.popup = new ResultPopup(this.node, this.gameFont);

        this.ensureValidBoard();
        this.renderer.createAllTiles(this.field.getGrid());

        this.hud.resetScore(this.session.getTargetScore());
        this.refreshHUD();
    }

    private async beginGame(): Promise<void> {
        await this.renderer.animateInitialAppearance();
        this.transitionTo(new IdleState());
    }

    public transitionTo(state: IInputState): void {
        this.inputState = state;
        this.hud.setActiveBooster(state.activeBooster);
    }

    public getCellAt(row: number, col: number): CellData | null {
        return this.field.getCell(row, col);
    }

    public findGroup(row: number, col: number): GridPosition[] {
        return this.field.findGroup(row, col);
    }

    public getBoosterCount(type: BoosterType): number {
        return this.session.getBoosterCount(type);
    }

    public highlightTile(row: number, col: number, on: boolean): void {
        this.renderer.setTileHighlight(row, col, on);
    }

    public clearHighlights(): void {
        this.renderer.clearAllHighlights();
    }

    public executeGroupMatch(row: number, col: number): void {
        this.transitionTo(new LockedState());
        this.processGroupMatch(row, col);
    }

    public executeSuperTileActivation(row: number, col: number, type: SuperTileType): void {
        this.transitionTo(new LockedState());
        this.processSuperTile(row, col, type);
    }

    public executeBombBooster(row: number, col: number): void {
        if (!this.session.consumeBooster(BoosterType.Bomb)) return;
        this.transitionTo(new LockedState());
        this.processBombBooster(row, col);
    }

    public executeTeleportSwap(a: GridPosition, b: GridPosition): void {
        if (!this.session.consumeBooster(BoosterType.Teleport)) {
            this.transitionTo(new IdleState());
            return;
        }
        this.transitionTo(new LockedState());
        this.processTeleport(a, b);
    }

    private async processGroupMatch(row: number, col: number): Promise<void> {
        const cell  = this.field.getCell(row, col)!;
        const group = this.field.findGroup(row, col);
        const color = cell.color;
        const superType = SuperTileResolver.determineType(group.length);
        const points = this.session.calcGroupScore(group.length);

        this.field.removeTiles(group);
        await this.renderer.animateDestroy(group);
        this.renderer.showFloatingScore(row, col, points, this.gameFont);

        if (superType !== SuperTileType.None) {
            this.field.placeSuperTile(row, col, color, superType);
            this.renderer.placeSuperTile(row, col, { color, superType });
            await this.renderer.animateSingleSpawn(row, col);
        }

        await this.settleField();
        this.session.addScore(points);
        this.session.consumeMove();
        this.refreshHUD();
        await this.endOfTurn();
    }

    private async processSuperTile(row: number, col: number, type: SuperTileType): Promise<void> {
        const seeds = SuperTileResolver.resolve(type, this.field, row, col);
        seeds.push({ row, col });
        const affected = SuperTileResolver.collectChained(this.field, seeds);
        const points   = this.session.calcEffectScore(affected.length);

        this.field.removeTiles(affected);
        await this.renderer.animateSuperEffect(type, { row, col }, affected);
        this.renderer.showFloatingScore(row, col, points, this.gameFont);

        await this.settleField();
        this.session.addScore(points);
        this.session.consumeMove();
        this.refreshHUD();
        await this.endOfTurn();
    }

    private async processBombBooster(row: number, col: number): Promise<void> {
        const seeds    = this.field.positionsInRadius(row, col, GameConfig.BOMB_RADIUS);
        const affected = SuperTileResolver.collectChained(this.field, seeds);
        const points   = this.session.calcEffectScore(affected.length);

        this.field.removeTiles(affected);
        await this.renderer.animateBombBlast({ row, col }, affected);
        this.renderer.showFloatingScore(row, col, points, this.gameFont);

        await this.settleField();
        this.session.addScore(points);
        this.refreshHUD();
        await this.endOfTurn();
    }

    private async processTeleport(a: GridPosition, b: GridPosition): Promise<void> {
        this.field.swapTiles(a, b);
        await this.renderer.animateSwap(a, b);
        this.refreshHUD();
        this.transitionTo(new IdleState());
    }

    private async settleField(): Promise<void> {
        const grav = this.field.applyGravity();
        await this.renderer.animateGravity(grav);

        const spawned = this.field.fillEmpty();
        await this.renderer.animateSpawn(spawned);
    }

    private async endOfTurn(): Promise<void> {
        if (this.session.checkWin())  { this.showResult(true);  return; }
        if (this.session.checkLose()) { this.showResult(false); return; }

        await this.autoShuffle();

        if (!this.session.isGameOver()) {
            this.transitionTo(new IdleState());
        }
    }

    private async autoShuffle(): Promise<void> {
        while (!this.field.hasValidMoves()) {
            if (!this.session.consumeShuffle()) {
                this.session.forceLose();
                this.showResult(false);
                return;
            }
            this.field.shuffle();
            await this.renderer.animateShuffle(this.field.getGrid());
        }
    }

    private ensureValidBoard(): void {
        while (!this.field.hasValidMoves()) this.field.shuffle();
    }

    private refreshHUD(): void {
        this.hud.animateScoreTo(this.session.getScore());
        this.hud.setMoves(this.session.getMovesRemaining());
        this.hud.setBombCount(this.session.getBoosterCount(BoosterType.Bomb));
        this.hud.setTeleportCount(this.session.getBoosterCount(BoosterType.Teleport));
    }

    private showResult(isWin: boolean): void {
        this.transitionTo(new LockedState());
        this.popup.show(
            isWin,
            this.session.getScore(),
            this.session.getTargetScore(),
            () => this.restart(),
        );
    }

    private wireRenderer(): void {
        const panel = cc.find('GamePanel', this.node)!;
        this.renderer = panel.addComponent(FieldRenderer);

        const superMap = new Map<SuperTileType, cc.SpriteFrame>();
        if (this.superRowSprite)   superMap.set(SuperTileType.RowClear,    this.superRowSprite);
        if (this.superColSprite)   superMap.set(SuperTileType.ColumnClear, this.superColSprite);
        if (this.superBombSprite)  superMap.set(SuperTileType.RadiusBomb,  this.superBombSprite);
        if (this.superFieldSprite) superMap.set(SuperTileType.FieldClear,  this.superFieldSprite);

        this.renderer.init(
            GameConfig.GRID_ROWS, GameConfig.GRID_COLS,
            this.tileSprites, superMap,
            (r, c) => this.inputState.onCellClick(this, r, c),
        );
    }

    private wireHUD(): void {
        const label = (path: string): cc.Label | null => {
            const n = cc.find(path, this.node);
            return n ? n.getComponent(cc.Label) : null;
        };

        const scoreLabel = label('ScorePanel/ScoreTxt');
        const movesLabel = label('ScorePanel/MovesPanel/Moves');
        const bombLabel  = label('BoosterBombPanel/TeleportTxt');
        const teleLabel  = label('BoosterTeleportPanel/TeleportTxt');

        if (!this.gameFont) {
            for (const l of [scoreLabel, movesLabel, bombLabel, teleLabel]) {
                if (l && l.font) { this.gameFont = l.font; break; }
            }
        }

        this.hud = new HUDPresenter(
            scoreLabel, movesLabel, bombLabel, teleLabel,
            this.gameFont || undefined,
        );

        const bombPanel = cc.find('BoosterBombPanel', this.node);
        const telePanel = cc.find('BoosterTeleportPanel', this.node);
        this.hud.initBoosterPanels(bombPanel, telePanel);

        // Button Click Events are used from the scene; manual touch wiring is disabled
    }

    private wireBoosterTouch(panel: cc.Node | null, handler: () => void): void {
        if (!panel) return;
        panel.on(cc.Node.EventType.TOUCH_START,
            (e: cc.Event.EventTouch) => e.stopPropagation(), this);
        panel.on(cc.Node.EventType.TOUCH_END,
            (e: cc.Event.EventTouch) => { e.stopPropagation(); handler(); }, this);
    }

    private async restart(): Promise<void> {
        this.transitionTo(new LockedState());

        await this.renderer.animateDismissAll();
        this.renderer.clearAllTiles();

        this.field   = new FieldModel();
        this.session = new GameSession();
        this.ensureValidBoard();

        this.hud.resetScore(this.session.getTargetScore());
        this.renderer.createAllTiles(this.field.getGrid());
        this.refreshHUD();

        await this.renderer.animateInitialAppearance();
        this.transitionTo(new IdleState());
    }
}
