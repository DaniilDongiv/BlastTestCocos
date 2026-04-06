"use strict";
cc._RF.push(module, 'e8605gDwBJA+IycTwUIGBVJ', 'MatchResolver');
// Scripts/core/MatchResolver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResolver = void 0;
var Types_1 = require("./Types");
var posKey = function (r, c) { return r + "," + c; };
var MatchResolver = /** @class */ (function () {
    function MatchResolver() {
    }
    MatchResolver.findGroup = function (grid, startRow, startCol) {
        var cell = grid.get(startRow, startCol);
        if (!cell || cell.superType !== Types_1.SuperTileType.None) {
            return cell ? [{ row: startRow, col: startCol }] : [];
        }
        var target = cell.color;
        var visited = new Set();
        var group = [];
        var queue = [{ row: startRow, col: startCol }];
        visited.add(posKey(startRow, startCol));
        while (queue.length > 0) {
            var cur = queue.shift();
            group.push(cur);
            for (var _i = 0, _a = this.DIRS; _i < _a.length; _i++) {
                var _b = _a[_i], dr = _b[0], dc = _b[1];
                var nr = cur.row + dr;
                var nc = cur.col + dc;
                var key = posKey(nr, nc);
                if (!grid.inBounds(nr, nc) || visited.has(key))
                    continue;
                var n = grid.get(nr, nc);
                if (n && n.superType === Types_1.SuperTileType.None && n.color === target) {
                    visited.add(key);
                    queue.push({ row: nr, col: nc });
                }
            }
        }
        return group;
    };
    MatchResolver.hasAnyValidGroup = function (grid, minGroupSize) {
        var visited = new Set();
        for (var r = 0; r < grid.rows; r++) {
            for (var c = 0; c < grid.cols; c++) {
                var cell = grid.get(r, c);
                if (!cell)
                    continue;
                if (cell.superType !== Types_1.SuperTileType.None)
                    return true;
                if (visited.has(posKey(r, c)))
                    continue;
                if (this.bfsCount(grid, r, c, visited) >= minGroupSize)
                    return true;
            }
        }
        return false;
    };
    MatchResolver.bfsCount = function (grid, startRow, startCol, visited) {
        var cell = grid.get(startRow, startCol);
        if (!cell || cell.superType !== Types_1.SuperTileType.None)
            return 0;
        var target = cell.color;
        var queue = [{ row: startRow, col: startCol }];
        visited.add(posKey(startRow, startCol));
        var count = 0;
        while (queue.length > 0) {
            var cur = queue.shift();
            count++;
            for (var _i = 0, _a = this.DIRS; _i < _a.length; _i++) {
                var _b = _a[_i], dr = _b[0], dc = _b[1];
                var nr = cur.row + dr;
                var nc = cur.col + dc;
                var key = posKey(nr, nc);
                if (!grid.inBounds(nr, nc) || visited.has(key))
                    continue;
                var n = grid.get(nr, nc);
                if (n && n.superType === Types_1.SuperTileType.None && n.color === target) {
                    visited.add(key);
                    queue.push({ row: nr, col: nc });
                }
            }
        }
        return count;
    };
    MatchResolver.DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    return MatchResolver;
}());
exports.MatchResolver = MatchResolver;

cc._RF.pop();