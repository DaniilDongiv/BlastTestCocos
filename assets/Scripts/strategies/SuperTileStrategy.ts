import { GameConfig } from '../config/GameConfig';
import { GridPosition, IFieldQuery, SuperTileType } from '../core/Types';

const posKey = (r: number, c: number): string => `${r},${c}`;

export interface ISuperTileStrategy {
    resolve(field: IFieldQuery, row: number, col: number): GridPosition[];
}

export class RowClearStrategy implements ISuperTileStrategy {
    public resolve(field: IFieldQuery, row: number, _col: number): GridPosition[] {
        return field.positionsInRow(row);
    }
}

export class ColumnClearStrategy implements ISuperTileStrategy {
    public resolve(field: IFieldQuery, _row: number, col: number): GridPosition[] {
        return field.positionsInColumn(col);
    }
}

export class RadiusBombStrategy implements ISuperTileStrategy {
    constructor(private readonly radius: number) {}

    public resolve(field: IFieldQuery, row: number, col: number): GridPosition[] {
        return field.positionsInRadius(row, col, this.radius);
    }
}

export class FieldClearStrategy implements ISuperTileStrategy {
    public resolve(field: IFieldQuery): GridPosition[] {
        return field.allNonNullPositions();
    }
}

interface SuperTileThreshold {
    readonly minSize: number;
    readonly type:    SuperTileType;
}

const SUPER_TILE_THRESHOLDS: ReadonlyArray<SuperTileThreshold> = [
    { minSize: GameConfig.SUPER_FIELD_CLEAR_MIN, type: SuperTileType.FieldClear  },
    { minSize: GameConfig.SUPER_RADIUS_BOMB_MIN, type: SuperTileType.RadiusBomb  },
    { minSize: GameConfig.SUPER_COL_CLEAR_MIN,   type: SuperTileType.ColumnClear },
    { minSize: GameConfig.SUPER_ROW_CLEAR_MIN,   type: SuperTileType.RowClear    },
];

export class SuperTileResolver {

    private static readonly strategies = new Map<SuperTileType, ISuperTileStrategy>([
        [SuperTileType.RowClear,    new RowClearStrategy()],
        [SuperTileType.ColumnClear, new ColumnClearStrategy()],
        [SuperTileType.RadiusBomb,  new RadiusBombStrategy(GameConfig.SUPER_BOMB_RADIUS)],
        [SuperTileType.FieldClear,  new FieldClearStrategy()],
    ]);

    public static resolve(
        type: SuperTileType,
        field: IFieldQuery,
        row: number,
        col: number,
    ): GridPosition[] {
        const s = this.strategies.get(type);
        return s ? s.resolve(field, row, col) : [];
    }

    public static determineType(groupSize: number): SuperTileType {
        for (const threshold of SUPER_TILE_THRESHOLDS) {
            if (groupSize >= threshold.minSize) return threshold.type;
        }
        return SuperTileType.None;
    }

    public static collectChained(
        field: IFieldQuery,
        seeds: GridPosition[],
    ): GridPosition[] {
        const visited = new Set<string>();
        const result: GridPosition[] = [];
        const queue: Array<{ row: number; col: number; superType: SuperTileType }> = [];

        const enqueue = (p: GridPosition): void => {
            const key = posKey(p.row, p.col);
            if (visited.has(key)) return;
            visited.add(key);
            result.push(p);

            const cell = field.getCell(p.row, p.col);
            if (cell && cell.superType !== SuperTileType.None) {
                queue.push({ row: p.row, col: p.col, superType: cell.superType });
            }
        };

        for (const s of seeds) enqueue(s);

        while (queue.length > 0) {
            const { row, col, superType } = queue.shift()!;
            const affected = this.resolve(superType, field, row, col);
            for (const a of affected) enqueue(a);
        }

        return result;
    }
}
