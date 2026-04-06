export enum TileColor {
    Blue   = 0,
    Red    = 1,
    Green  = 2,
    Yellow = 3,
    Purple = 4,
}

export const TILE_COLOR_COUNT = 5;

export enum SuperTileType {
    None        = 0,
    RowClear    = 1,
    ColumnClear = 2,
    RadiusBomb  = 3,
    FieldClear  = 4,
}

export enum BoosterType {
    None     = 0,
    Bomb     = 1,
    Teleport = 2,
}

export enum GameResult {
    None = 0,
    Win  = 1,
    Lose = 2,
}

export interface CellData {
    color: TileColor;
    superType: SuperTileType;
}

export interface GridPosition {
    row: number;
    col: number;
}

export interface GravityMove {
    from: GridPosition;
    to: GridPosition;
    cell: CellData;
}

export interface SpawnedTile {
    position: GridPosition;
    cell: CellData;
    fallDistance: number;
}

export interface IFieldQuery {
    getRows(): number;
    getCols(): number;
    getCell(row: number, col: number): CellData | null;
    positionsInRow(row: number): GridPosition[];
    positionsInColumn(col: number): GridPosition[];
    positionsInRadius(centerRow: number, centerCol: number, radius: number): GridPosition[];
    allNonNullPositions(): GridPosition[];
}
