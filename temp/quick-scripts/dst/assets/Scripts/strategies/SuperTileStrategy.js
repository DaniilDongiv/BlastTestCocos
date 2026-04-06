
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/strategies/SuperTileStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RyYXRlZ2llc1xcU3VwZXJUaWxlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHVDQUF5RTtBQUV6RSxJQUFNLE1BQU0sR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFTLElBQWEsT0FBRyxDQUFDLFNBQUksQ0FBRyxFQUFYLENBQVcsQ0FBQztBQU03RDtJQUFBO0lBSUEsQ0FBQztJQUhVLGtDQUFPLEdBQWQsVUFBZSxLQUFrQixFQUFFLEdBQVcsRUFBRSxJQUFZO1FBQ3hELE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDRDQUFnQjtBQU03QjtJQUFBO0lBSUEsQ0FBQztJQUhVLHFDQUFPLEdBQWQsVUFBZSxLQUFrQixFQUFFLElBQVksRUFBRSxHQUFXO1FBQ3hELE9BQU8sS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCwwQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksa0RBQW1CO0FBTWhDO0lBQ0ksNEJBQTZCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV4QyxvQ0FBTyxHQUFkLFVBQWUsS0FBa0IsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUN2RCxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLGdEQUFrQjtBQVEvQjtJQUFBO0lBSUEsQ0FBQztJQUhVLG9DQUFPLEdBQWQsVUFBZSxLQUFrQjtRQUM3QixPQUFPLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFD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USxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUQsS0FBZ0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRO2dCQUFuQixJQUFNLENBQUMsaUJBQUE7Z0JBQWMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUE7U0FDeEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBckR1Qiw0QkFBVSxHQUFHLElBQUksR0FBRyxDQUFvQztRQUM1RSxDQUFDLHFCQUFhLENBQUMsUUFBUSxFQUFLLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNuRCxDQUFDLHFCQUFhLENBQUMsV0FBVyxFQUFFLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUN0RCxDQUFDLHFCQUFhLENBQUMsVUFBVSxFQUFHLElBQUksa0JBQWtCLENBQUMsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pGLENBQUMscUJBQWEsQ0FBQyxVQUFVLEVBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0tBQ3hELENBQUMsQ0FBQztJQWlEUCx3QkFBQztDQXhERCxBQXdEQyxJQUFBO0FBeERZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tICcuLi9jb25maWcvR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWRQb3NpdGlvbiwgSUZpZWxkUXVlcnksIFN1cGVyVGlsZVR5cGUgfSBmcm9tICcuLi9jb3JlL1R5cGVzJztcclxuXHJcbmNvbnN0IHBvc0tleSA9IChyOiBudW1iZXIsIGM6IG51bWJlcik6IHN0cmluZyA9PiBgJHtyfSwke2N9YDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1cGVyVGlsZVN0cmF0ZWd5IHtcclxuICAgIHJlc29sdmUoZmllbGQ6IElGaWVsZFF1ZXJ5LCByb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBHcmlkUG9zaXRpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvd0NsZWFyU3RyYXRlZ3kgaW1wbGVtZW50cyBJU3VwZXJUaWxlU3RyYXRlZ3kge1xyXG4gICAgcHVibGljIHJlc29sdmUoZmllbGQ6IElGaWVsZFF1ZXJ5LCByb3c6IG51bWJlciwgX2NvbDogbnVtYmVyKTogR3JpZFBvc2l0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC5wb3NpdGlvbnNJblJvdyhyb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uQ2xlYXJTdHJhdGVneSBpbXBsZW1lbnRzIElTdXBlclRpbGVTdHJhdGVneSB7XHJcbiAgICBwdWJsaWMgcmVzb2x2ZShmaWVsZDogSUZpZWxkUXVlcnksIF9yb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBHcmlkUG9zaXRpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLnBvc2l0aW9uc0luQ29sdW1uKGNvbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSYWRpdXNCb21iU3RyYXRlZ3kgaW1wbGVtZW50cyBJU3VwZXJUaWxlU3RyYXRlZ3kge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByYWRpdXM6IG51bWJlcikge31cclxuXHJcbiAgICBwdWJsaWMgcmVzb2x2ZShmaWVsZDogSUZpZWxkUXVlcnksIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IEdyaWRQb3NpdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gZmllbGQucG9zaXRpb25zSW5SYWRpdXMocm93LCBjb2wsIHRoaXMucmFkaXVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkQ2xlYXJTdHJhdGVneSBpbXBsZW1lbnRzIElTdXBlclRpbGVTdHJhdGVneSB7XHJcbiAgICBwdWJsaWMgcmVzb2x2ZShmaWVsZDogSUZpZWxkUXVlcnkpOiBHcmlkUG9zaXRpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFsbE5vbk51bGxQb3NpdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFN1cGVyVGlsZVRocmVzaG9sZCB7XHJcbiAgICByZWFkb25seSBtaW5TaXplOiBudW1iZXI7XHJcbiAgICByZWFkb25seSB0eXBlOiAgICBTdXBlclRpbGVUeXBlO1xyXG59XHJcblxyXG5jb25zdCBTVVBFUl9USUxFX1RIUkVTSE9MRFM6IFJlYWRvbmx5QXJyYXk8U3VwZXJUaWxlVGhyZXNob2xkPiA9IFtcclxuICAgIHsgbWluU2l6ZTogR2FtZUNvbmZpZy5TVVBFUl9GSUVMRF9DTEVBUl9NSU4sIHR5cGU6IFN1cGVyVGlsZVR5cGUuRmllbGRDbGVhciAgfSxcclxuICAgIHsgbWluU2l6ZTogR2FtZUNvbmZpZy5TVVBFUl9SQURJVVNfQk9NQl9NSU4sIHR5cGU6IFN1cGVyVGlsZVR5cGUuUmFkaXVzQm9tYiAgfSxcclxuICAgIHsgbWluU2l6ZTogR2FtZUNvbmZpZy5TVVBFUl9DT0xfQ0xFQVJfTUlOLCAgIHR5cGU6IFN1cGVyVGlsZVR5cGUuQ29sdW1uQ2xlYXIgfSxcclxuICAgIHsgbWluU2l6ZTogR2FtZUNvbmZpZy5TVVBFUl9ST1dfQ0xFQVJfTUlOLCAgIHR5cGU6IFN1cGVyVGlsZVR5cGUuUm93Q2xlYXIgICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXBlclRpbGVSZXNvbHZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc3RyYXRlZ2llcyA9IG5ldyBNYXA8U3VwZXJUaWxlVHlwZSwgSVN1cGVyVGlsZVN0cmF0ZWd5PihbXHJcbiAgICAgICAgW1N1cGVyVGlsZVR5cGUuUm93Q2xlYXIsICAgIG5ldyBSb3dDbGVhclN0cmF0ZWd5KCldLFxyXG4gICAgICAgIFtTdXBlclRpbGVUeXBlLkNvbHVtbkNsZWFyLCBuZXcgQ29sdW1uQ2xlYXJTdHJhdGVneSgpXSxcclxuICAgICAgICBbU3VwZXJUaWxlVHlwZS5SYWRpdXNCb21iLCAgbmV3IFJhZGl1c0JvbWJTdHJhdGVneShHYW1lQ29uZmlnLlNVUEVSX0JPTUJfUkFESVVTKV0sXHJcbiAgICAgICAgW1N1cGVyVGlsZVR5cGUuRmllbGRDbGVhciwgIG5ldyBGaWVsZENsZWFyU3RyYXRlZ3koKV0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc29sdmUoXHJcbiAgICAgICAgdHlwZTogU3VwZXJUaWxlVHlwZSxcclxuICAgICAgICBmaWVsZDogSUZpZWxkUXVlcnksXHJcbiAgICAgICAgcm93OiBudW1iZXIsXHJcbiAgICAgICAgY29sOiBudW1iZXIsXHJcbiAgICApOiBHcmlkUG9zaXRpb25bXSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyYXRlZ2llcy5nZXQodHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIHMgPyBzLnJlc29sdmUoZmllbGQsIHJvdywgY29sKSA6IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGV0ZXJtaW5lVHlwZShncm91cFNpemU6IG51bWJlcik6IFN1cGVyVGlsZVR5cGUge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGhyZXNob2xkIG9mIFNVUEVSX1RJTEVfVEhSRVNIT0xEUykge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXBTaXplID49IHRocmVzaG9sZC5taW5TaXplKSByZXR1cm4gdGhyZXNob2xkLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTdXBlclRpbGVUeXBlLk5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb2xsZWN0Q2hhaW5lZChcclxuICAgICAgICBmaWVsZDogSUZpZWxkUXVlcnksXHJcbiAgICAgICAgc2VlZHM6IEdyaWRQb3NpdGlvbltdLFxyXG4gICAgKTogR3JpZFBvc2l0aW9uW10ge1xyXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IEdyaWRQb3NpdGlvbltdID0gW107XHJcbiAgICAgICAgY29uc3QgcXVldWU6IEFycmF5PHsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyOyBzdXBlclR5cGU6IFN1cGVyVGlsZVR5cGUgfT4gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5xdWV1ZSA9IChwOiBHcmlkUG9zaXRpb24pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gcG9zS2V5KHAucm93LCBwLmNvbCk7XHJcbiAgICAgICAgICAgIGlmICh2aXNpdGVkLmhhcyhrZXkpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZpc2l0ZWQuYWRkKGtleSk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGZpZWxkLmdldENlbGwocC5yb3csIHAuY29sKTtcclxuICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5zdXBlclR5cGUgIT09IFN1cGVyVGlsZVR5cGUuTm9uZSkge1xyXG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IHJvdzogcC5yb3csIGNvbDogcC5jb2wsIHN1cGVyVHlwZTogY2VsbC5zdXBlclR5cGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2VlZHMpIGVucXVldWUocyk7XHJcblxyXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wsIHN1cGVyVHlwZSB9ID0gcXVldWUuc2hpZnQoKSE7XHJcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkID0gdGhpcy5yZXNvbHZlKHN1cGVyVHlwZSwgZmllbGQsIHJvdywgY29sKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhIG9mIGFmZmVjdGVkKSBlbnF1ZXVlKGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iXX0=