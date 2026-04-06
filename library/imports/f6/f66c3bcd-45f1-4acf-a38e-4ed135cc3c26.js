"use strict";
cc._RF.push(module, 'f66c3vNRfFKz6OOTtE1zDwm', 'SuperTileStrategy');
// Scripts/strategies/SuperTileStrategy.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperTileResolver = exports.FieldClearStrategy = exports.RadiusBombStrategy = exports.ColumnClearStrategy = exports.RowClearStrategy = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Types_1 = require("../core/Types");
var posKey = function (r, c) { return r + "," + c; };
var RowClearStrategy = /** @class */ (function () {
    function RowClearStrategy() {
    }
    RowClearStrategy.prototype.resolve = function (field, row, _col) {
        return field.positionsInRow(row);
    };
    return RowClearStrategy;
}());
exports.RowClearStrategy = RowClearStrategy;
var ColumnClearStrategy = /** @class */ (function () {
    function ColumnClearStrategy() {
    }
    ColumnClearStrategy.prototype.resolve = function (field, _row, col) {
        return field.positionsInColumn(col);
    };
    return ColumnClearStrategy;
}());
exports.ColumnClearStrategy = ColumnClearStrategy;
var RadiusBombStrategy = /** @class */ (function () {
    function RadiusBombStrategy(radius) {
        this.radius = radius;
    }
    RadiusBombStrategy.prototype.resolve = function (field, row, col) {
        return field.positionsInRadius(row, col, this.radius);
    };
    return RadiusBombStrategy;
}());
exports.RadiusBombStrategy = RadiusBombStrategy;
var FieldClearStrategy = /** @class */ (function () {
    function FieldClearStrategy() {
    }
    FieldClearStrategy.prototype.resolve = function (field) {
        return field.allNonNullPositions();
    };
    return FieldClearStrategy;
}());
exports.FieldClearStrategy = FieldClearStrategy;
var SUPER_TILE_THRESHOLDS = [
    { minSize: GameConfig_1.GameConfig.SUPER_FIELD_CLEAR_MIN, type: Types_1.SuperTileType.FieldClear },
    { minSize: GameConfig_1.GameConfig.SUPER_RADIUS_BOMB_MIN, type: Types_1.SuperTileType.RadiusBomb },
    { minSize: GameConfig_1.GameConfig.SUPER_COL_CLEAR_MIN, type: Types_1.SuperTileType.ColumnClear },
    { minSize: GameConfig_1.GameConfig.SUPER_ROW_CLEAR_MIN, type: Types_1.SuperTileType.RowClear },
];
var SuperTileResolver = /** @class */ (function () {
    function SuperTileResolver() {
    }
    SuperTileResolver.resolve = function (type, field, row, col) {
        var s = this.strategies.get(type);
        return s ? s.resolve(field, row, col) : [];
    };
    SuperTileResolver.determineType = function (groupSize) {
        for (var _i = 0, SUPER_TILE_THRESHOLDS_1 = SUPER_TILE_THRESHOLDS; _i < SUPER_TILE_THRESHOLDS_1.length; _i++) {
            var threshold = SUPER_TILE_THRESHOLDS_1[_i];
            if (groupSize >= threshold.minSize)
                return threshold.type;
        }
        return Types_1.SuperTileType.None;
    };
    SuperTileResolver.collectChained = function (field, seeds) {
        var visited = new Set();
        var result = [];
        var queue = [];
        var enqueue = function (p) {
            var key = posKey(p.row, p.col);
            if (visited.has(key))
                return;
            visited.add(key);
            result.push(p);
            var cell = field.getCell(p.row, p.col);
            if (cell && cell.superType !== Types_1.SuperTileType.None) {
                queue.push({ row: p.row, col: p.col, superType: cell.superType });
            }
        };
        for (var _i = 0, seeds_1 = seeds; _i < seeds_1.length; _i++) {
            var s = seeds_1[_i];
            enqueue(s);
        }
        while (queue.length > 0) {
            var _a = queue.shift(), row = _a.row, col = _a.col, superType = _a.superType;
            var affected = this.resolve(superType, field, row, col);
            for (var _b = 0, affected_1 = affected; _b < affected_1.length; _b++) {
                var a = affected_1[_b];
                enqueue(a);
            }
        }
        return result;
    };
    SuperTileResolver.strategies = new Map([
        [Types_1.SuperTileType.RowClear, new RowClearStrategy()],
        [Types_1.SuperTileType.ColumnClear, new ColumnClearStrategy()],
        [Types_1.SuperTileType.RadiusBomb, new RadiusBombStrategy(GameConfig_1.GameConfig.SUPER_BOMB_RADIUS)],
        [Types_1.SuperTileType.FieldClear, new FieldClearStrategy()],
    ]);
    return SuperTileResolver;
}());
exports.SuperTileResolver = SuperTileResolver;

cc._RF.pop();