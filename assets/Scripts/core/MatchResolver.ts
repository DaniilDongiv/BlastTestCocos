import { CellData, GridPosition, SuperTileType } from './Types';
import { Grid } from './Grid';

const posKey = (r: number, c: number): string => `${r},${c}`;

export class MatchResolver {

    private static readonly DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]] as const;

    public static findGroup(
        grid: Grid<CellData | null>,
        startRow: number,
        startCol: number,
    ): GridPosition[] {
        const cell = grid.get(startRow, startCol);

        if (!cell || cell.superType !== SuperTileType.None) {
            return cell ? [{ row: startRow, col: startCol }] : [];
        }

        const target  = cell.color;
        const visited = new Set<string>();
        const group: GridPosition[] = [];
        const queue: GridPosition[] = [{ row: startRow, col: startCol }];
        visited.add(posKey(startRow, startCol));

        while (queue.length > 0) {
            const cur = queue.shift()!;
            group.push(cur);

            for (const [dr, dc] of this.DIRS) {
                const nr = cur.row + dr;
                const nc = cur.col + dc;
                const key = posKey(nr, nc);
                if (!grid.inBounds(nr, nc) || visited.has(key)) continue;

                const n = grid.get(nr, nc);
                if (n && n.superType === SuperTileType.None && n.color === target) {
                    visited.add(key);
                    queue.push({ row: nr, col: nc });
                }
            }
        }
        return group;
    }

    public static hasAnyValidGroup(
        grid: Grid<CellData | null>,
        minGroupSize: number,
    ): boolean {
        const visited = new Set<string>();

        for (let r = 0; r < grid.rows; r++) {
            for (let c = 0; c < grid.cols; c++) {
                const cell = grid.get(r, c);
                if (!cell) continue;
                if (cell.superType !== SuperTileType.None) return true;
                if (visited.has(posKey(r, c))) continue;
                if (this.bfsCount(grid, r, c, visited) >= minGroupSize) return true;
            }
        }
        return false;
    }

    private static bfsCount(
        grid: Grid<CellData | null>,
        startRow: number,
        startCol: number,
        visited: Set<string>,
    ): number {
        const cell = grid.get(startRow, startCol);
        if (!cell || cell.superType !== SuperTileType.None) return 0;

        const target = cell.color;
        const queue: GridPosition[] = [{ row: startRow, col: startCol }];
        visited.add(posKey(startRow, startCol));
        let count = 0;

        while (queue.length > 0) {
            const cur = queue.shift()!;
            count++;

            for (const [dr, dc] of this.DIRS) {
                const nr = cur.row + dr;
                const nc = cur.col + dc;
                const key = posKey(nr, nc);
                if (!grid.inBounds(nr, nc) || visited.has(key)) continue;

                const n = grid.get(nr, nc);
                if (n && n.superType === SuperTileType.None && n.color === target) {
                    visited.add(key);
                    queue.push({ row: nr, col: nc });
                }
            }
        }
        return count;
    }
}
