import { GameConfig } from '../config/GameConfig';
import { Grid } from './Grid';
import {
    CellData, GridPosition, GravityMove, IFieldQuery, SpawnedTile,
    SuperTileType, TileColor, TILE_COLOR_COUNT,
} from './Types';
import { MatchResolver } from './MatchResolver';

export class FieldModel implements IFieldQuery {

    private grid: Grid<CellData | null>;

    constructor(rows: number = GameConfig.GRID_ROWS, cols: number = GameConfig.GRID_COLS) {
        this.grid = Grid.create(rows, cols, () => ({
            color: FieldModel.randomColor(),
            superType: SuperTileType.None,
        }));
    }

    public getRows(): number { return this.grid.rows; }
    public getCols(): number { return this.grid.cols; }
    public getGrid(): Grid<CellData | null> { return this.grid; }

    public getCell(row: number, col: number): CellData | null {
        return this.grid.inBounds(row, col) ? this.grid.get(row, col) : null;
    }

    public findGroup(row: number, col: number): GridPosition[] {
        return MatchResolver.findGroup(this.grid, row, col);
    }

    public hasValidMoves(): boolean {
        return MatchResolver.hasAnyValidGroup(this.grid, GameConfig.MIN_GROUP_SIZE);
    }

    public removeTiles(positions: GridPosition[]): void {
        for (const p of positions) this.grid.set(p.row, p.col, null);
    }

    public placeSuperTile(row: number, col: number, color: TileColor, superType: SuperTileType): void {
        this.grid.set(row, col, { color, superType });
    }

    public applyGravity(): GravityMove[] {
        const moves: GravityMove[] = [];
        const { rows, cols } = this.grid;

        for (let c = 0; c < cols; c++) {
            let write = 0;
            for (let read = 0; read < rows; read++) {
                const cell = this.grid.get(read, c);
                if (cell !== null) {
                    if (read !== write) {
                        moves.push({ from: { row: read, col: c }, to: { row: write, col: c }, cell });
                        this.grid.set(write, c, cell);
                        this.grid.set(read, c, null);
                    }
                    write++;
                }
            }
        }
        return moves;
    }

    public fillEmpty(): SpawnedTile[] {
        const spawned: SpawnedTile[] = [];
        const { rows, cols } = this.grid;

        for (let c = 0; c < cols; c++) {
            let emptyCount = 0;
            for (let r = rows - 1; r >= 0; r--) {
                if (this.grid.get(r, c) === null) emptyCount++;
                else break;
            }

            for (let i = 0; i < emptyCount; i++) {
                const row = rows - emptyCount + i;
                const cell: CellData = { color: FieldModel.randomColor(), superType: SuperTileType.None };
                this.grid.set(row, c, cell);
                spawned.push({ position: { row, col: c }, cell, fallDistance: emptyCount - i });
            }
        }
        return spawned;
    }

    public shuffle(): void {
        const cells: CellData[] = [];
        this.grid.forEach(v => { if (v) cells.push(v); });

        for (let i = cells.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cells[i], cells[j]] = [cells[j], cells[i]];
        }

        let idx = 0;
        const { rows, cols } = this.grid;
        for (let r = 0; r < rows; r++)
            for (let c = 0; c < cols; c++)
                this.grid.set(r, c, cells[idx++] ?? null);
    }

    public swapTiles(a: GridPosition, b: GridPosition): void {
        this.grid.swap(a.row, a.col, b.row, b.col);
    }

    public positionsInRow(row: number): GridPosition[] {
        const out: GridPosition[] = [];
        for (let c = 0; c < this.grid.cols; c++)
            if (this.grid.get(row, c) !== null) out.push({ row, col: c });
        return out;
    }

    public positionsInColumn(col: number): GridPosition[] {
        const out: GridPosition[] = [];
        for (let r = 0; r < this.grid.rows; r++)
            if (this.grid.get(r, col) !== null) out.push({ row: r, col });
        return out;
    }

    public positionsInRadius(centerRow: number, centerCol: number, radius: number): GridPosition[] {
        const out: GridPosition[] = [];
        for (let r = centerRow - radius; r <= centerRow + radius; r++)
            for (let c = centerCol - radius; c <= centerCol + radius; c++)
                if (this.grid.inBounds(r, c) && this.grid.get(r, c) !== null)
                    out.push({ row: r, col: c });
        return out;
    }

    public allNonNullPositions(): GridPosition[] {
        return this.grid.collect((v, r, c) => v !== null ? { row: r, col: c } : null);
    }

    private static randomColor(): TileColor {
        return Math.floor(Math.random() * TILE_COLOR_COUNT) as TileColor;
    }
}
