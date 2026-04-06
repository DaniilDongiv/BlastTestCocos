
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/FieldModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f99b23LMuVKD7kLBQsFU1yE', 'FieldModel');
// Scripts/core/FieldModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldModel = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Grid_1 = require("./Grid");
var Types_1 = require("./Types");
var MatchResolver_1 = require("./MatchResolver");
var FieldModel = /** @class */ (function () {
    function FieldModel(rows, cols) {
        if (rows === void 0) { rows = GameConfig_1.GameConfig.GRID_ROWS; }
        if (cols === void 0) { cols = GameConfig_1.GameConfig.GRID_COLS; }
        this.grid = Grid_1.Grid.create(rows, cols, function () { return ({
            color: FieldModel.randomColor(),
            superType: Types_1.SuperTileType.None,
        }); });
    }
    FieldModel.prototype.getRows = function () { return this.grid.rows; };
    FieldModel.prototype.getCols = function () { return this.grid.cols; };
    FieldModel.prototype.getGrid = function () { return this.grid; };
    FieldModel.prototype.getCell = function (row, col) {
        return this.grid.inBounds(row, col) ? this.grid.get(row, col) : null;
    };
    FieldModel.prototype.findGroup = function (row, col) {
        return MatchResolver_1.MatchResolver.findGroup(this.grid, row, col);
    };
    FieldModel.prototype.hasValidMoves = function () {
        return MatchResolver_1.MatchResolver.hasAnyValidGroup(this.grid, GameConfig_1.GameConfig.MIN_GROUP_SIZE);
    };
    FieldModel.prototype.removeTiles = function (positions) {
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var p = positions_1[_i];
            this.grid.set(p.row, p.col, null);
        }
    };
    FieldModel.prototype.placeSuperTile = function (row, col, color, superType) {
        this.grid.set(row, col, { color: color, superType: superType });
    };
    FieldModel.prototype.applyGravity = function () {
        var moves = [];
        var _a = this.grid, rows = _a.rows, cols = _a.cols;
        for (var c = 0; c < cols; c++) {
            var write = 0;
            for (var read = 0; read < rows; read++) {
                var cell = this.grid.get(read, c);
                if (cell !== null) {
                    if (read !== write) {
                        moves.push({ from: { row: read, col: c }, to: { row: write, col: c }, cell: cell });
                        this.grid.set(write, c, cell);
                        this.grid.set(read, c, null);
                    }
                    write++;
                }
            }
        }
        return moves;
    };
    FieldModel.prototype.fillEmpty = function () {
        var spawned = [];
        var _a = this.grid, rows = _a.rows, cols = _a.cols;
        for (var c = 0; c < cols; c++) {
            var emptyCount = 0;
            for (var r = rows - 1; r >= 0; r--) {
                if (this.grid.get(r, c) === null)
                    emptyCount++;
                else
                    break;
            }
            for (var i = 0; i < emptyCount; i++) {
                var row = rows - emptyCount + i;
                var cell = { color: FieldModel.randomColor(), superType: Types_1.SuperTileType.None };
                this.grid.set(row, c, cell);
                spawned.push({ position: { row: row, col: c }, cell: cell, fallDistance: emptyCount - i });
            }
        }
        return spawned;
    };
    FieldModel.prototype.shuffle = function () {
        var _a;
        var _b;
        var cells = [];
        this.grid.forEach(function (v) { if (v)
            cells.push(v); });
        for (var i = cells.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [cells[j], cells[i]], cells[i] = _a[0], cells[j] = _a[1];
        }
        var idx = 0;
        var _c = this.grid, rows = _c.rows, cols = _c.cols;
        for (var r = 0; r < rows; r++)
            for (var c = 0; c < cols; c++)
                this.grid.set(r, c, (_b = cells[idx++]) !== null && _b !== void 0 ? _b : null);
    };
    FieldModel.prototype.swapTiles = function (a, b) {
        this.grid.swap(a.row, a.col, b.row, b.col);
    };
    FieldModel.prototype.positionsInRow = function (row) {
        var out = [];
        for (var c = 0; c < this.grid.cols; c++)
            if (this.grid.get(row, c) !== null)
                out.push({ row: row, col: c });
        return out;
    };
    FieldModel.prototype.positionsInColumn = function (col) {
        var out = [];
        for (var r = 0; r < this.grid.rows; r++)
            if (this.grid.get(r, col) !== null)
                out.push({ row: r, col: col });
        return out;
    };
    FieldModel.prototype.positionsInRadius = function (centerRow, centerCol, radius) {
        var out = [];
        for (var r = centerRow - radius; r <= centerRow + radius; r++)
            for (var c = centerCol - radius; c <= centerCol + radius; c++)
                if (this.grid.inBounds(r, c) && this.grid.get(r, c) !== null)
                    out.push({ row: r, col: c });
        return out;
    };
    FieldModel.prototype.allNonNullPositions = function () {
        return this.grid.collect(function (v, r, c) { return v !== null ? { row: r, col: c } : null; });
    };
    FieldModel.randomColor = function () {
        return Math.floor(Math.random() * Types_1.TILE_COLOR_COUNT);
    };
    return FieldModel;
}());
exports.FieldModel = FieldModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29yZVxcRmllbGRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsK0JBQThCO0FBQzlCLGlDQUdpQjtBQUNqQixpREFBZ0Q7QUFFaEQ7SUFJSSxvQkFBWSxJQUFtQyxFQUFFLElBQW1DO1FBQXhFLHFCQUFBLEVBQUEsT0FBZSx1QkFBVSxDQUFDLFNBQVM7UUFBRSxxQkFBQSxFQUFBLE9BQWUsdUJBQVUsQ0FBQyxTQUFTO1FBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQU0sT0FBQSxDQUFDO1lBQ3ZDLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQy9CLFNBQVMsRUFBRSxxQkFBYSxDQUFDLElBQUk7U0FDaEMsQ0FBQyxFQUh3QyxDQUd4QyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU0sNEJBQU8sR0FBZCxjQUEyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1Qyw0QkFBTyxHQUFkLGNBQTJCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLDRCQUFPLEdBQWQsY0FBMEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV0RCw0QkFBTyxHQUFkLFVBQWUsR0FBVyxFQUFFLEdBQVc7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pFLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsR0FBVztRQUNyQyxPQUFPLDZC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LENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRWMsc0JBQVcsR0FBMUI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLHdCQUFnQixDQUFjLENBQUM7SUFDckUsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0EvSEEsQUErSEMsSUFBQTtBQS9IWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tICcuLi9jb25maWcvR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL0dyaWQnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2VsbERhdGEsIEdyaWRQb3NpdGlvbiwgR3Jhdml0eU1vdmUsIElGaWVsZFF1ZXJ5LCBTcGF3bmVkVGlsZSxcclxuICAgIFN1cGVyVGlsZVR5cGUsIFRpbGVDb2xvciwgVElMRV9DT0xPUl9DT1VOVCxcclxufSBmcm9tICcuL1R5cGVzJztcclxuaW1wb3J0IHsgTWF0Y2hSZXNvbHZlciB9IGZyb20gJy4vTWF0Y2hSZXNvbHZlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRNb2RlbCBpbXBsZW1lbnRzIElGaWVsZFF1ZXJ5IHtcclxuXHJcbiAgICBwcml2YXRlIGdyaWQ6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3dzOiBudW1iZXIgPSBHYW1lQ29uZmlnLkdSSURfUk9XUywgY29sczogbnVtYmVyID0gR2FtZUNvbmZpZy5HUklEX0NPTFMpIHtcclxuICAgICAgICB0aGlzLmdyaWQgPSBHcmlkLmNyZWF0ZShyb3dzLCBjb2xzLCAoKSA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogRmllbGRNb2RlbC5yYW5kb21Db2xvcigpLFxyXG4gICAgICAgICAgICBzdXBlclR5cGU6IFN1cGVyVGlsZVR5cGUuTm9uZSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvd3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZ3JpZC5yb3dzOyB9XHJcbiAgICBwdWJsaWMgZ2V0Q29scygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5ncmlkLmNvbHM7IH1cclxuICAgIHB1YmxpYyBnZXRHcmlkKCk6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPiB7IHJldHVybiB0aGlzLmdyaWQ7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VsbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBDZWxsRGF0YSB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuaW5Cb3VuZHMocm93LCBjb2wpID8gdGhpcy5ncmlkLmdldChyb3csIGNvbCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kR3JvdXAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogR3JpZFBvc2l0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiBNYXRjaFJlc29sdmVyLmZpbmRHcm91cCh0aGlzLmdyaWQsIHJvdywgY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVmFsaWRNb3ZlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWF0Y2hSZXNvbHZlci5oYXNBbnlWYWxpZEdyb3VwKHRoaXMuZ3JpZCwgR2FtZUNvbmZpZy5NSU5fR1JPVVBfU0laRSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVRpbGVzKHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcG9zaXRpb25zKSB0aGlzLmdyaWQuc2V0KHAucm93LCBwLmNvbCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYWNlU3VwZXJUaWxlKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgY29sb3I6IFRpbGVDb2xvciwgc3VwZXJUeXBlOiBTdXBlclRpbGVUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ncmlkLnNldChyb3csIGNvbCwgeyBjb2xvciwgc3VwZXJUeXBlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBseUdyYXZpdHkoKTogR3Jhdml0eU1vdmVbXSB7XHJcbiAgICAgICAgY29uc3QgbW92ZXM6IEdyYXZpdHlNb3ZlW10gPSBbXTtcclxuICAgICAgICBjb25zdCB7IHJvd3MsIGNvbHMgfSA9IHRoaXMuZ3JpZDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjKyspIHtcclxuICAgICAgICAgICAgbGV0IHdyaXRlID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgcmVhZCA9IDA7IHJlYWQgPCByb3dzOyByZWFkKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWQuZ2V0KHJlYWQsIGMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZCAhPT0gd3JpdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMucHVzaCh7IGZyb206IHsgcm93OiByZWFkLCBjb2w6IGMgfSwgdG86IHsgcm93OiB3cml0ZSwgY29sOiBjIH0sIGNlbGwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zZXQod3JpdGUsIGMsIGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc2V0KHJlYWQsIGMsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3cml0ZSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsbEVtcHR5KCk6IFNwYXduZWRUaWxlW10ge1xyXG4gICAgICAgIGNvbnN0IHNwYXduZWQ6IFNwYXduZWRUaWxlW10gPSBbXTtcclxuICAgICAgICBjb25zdCB7IHJvd3MsIGNvbHMgfSA9IHRoaXMuZ3JpZDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjKyspIHtcclxuICAgICAgICAgICAgbGV0IGVtcHR5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gcm93cyAtIDE7IHIgPj0gMDsgci0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkLmdldChyLCBjKSA9PT0gbnVsbCkgZW1wdHlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3MgLSBlbXB0eUNvdW50ICsgaTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGw6IENlbGxEYXRhID0geyBjb2xvcjogRmllbGRNb2RlbC5yYW5kb21Db2xvcigpLCBzdXBlclR5cGU6IFN1cGVyVGlsZVR5cGUuTm9uZSB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNldChyb3csIGMsIGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgc3Bhd25lZC5wdXNoKHsgcG9zaXRpb246IHsgcm93LCBjb2w6IGMgfSwgY2VsbCwgZmFsbERpc3RhbmNlOiBlbXB0eUNvdW50IC0gaSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3Bhd25lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2h1ZmZsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjZWxsczogQ2VsbERhdGFbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5mb3JFYWNoKHYgPT4geyBpZiAodikgY2VsbHMucHVzaCh2KTsgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBjZWxscy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgW2NlbGxzW2ldLCBjZWxsc1tqXV0gPSBbY2VsbHNbal0sIGNlbGxzW2ldXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgIGNvbnN0IHsgcm93cywgY29scyB9ID0gdGhpcy5ncmlkO1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHM7IGMrKylcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zZXQociwgYywgY2VsbHNbaWR4KytdID8/IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2FwVGlsZXMoYTogR3JpZFBvc2l0aW9uLCBiOiBHcmlkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyaWQuc3dhcChhLnJvdywgYS5jb2wsIGIucm93LCBiLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc2l0aW9uc0luUm93KHJvdzogbnVtYmVyKTogR3JpZFBvc2l0aW9uW10ge1xyXG4gICAgICAgIGNvbnN0IG91dDogR3JpZFBvc2l0aW9uW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuZ3JpZC5jb2xzOyBjKyspXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuZ2V0KHJvdywgYykgIT09IG51bGwpIG91dC5wdXNoKHsgcm93LCBjb2w6IGMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zaXRpb25zSW5Db2x1bW4oY29sOiBudW1iZXIpOiBHcmlkUG9zaXRpb25bXSB7XHJcbiAgICAgICAgY29uc3Qgb3V0OiBHcmlkUG9zaXRpb25bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5ncmlkLnJvd3M7IHIrKylcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5nZXQociwgY29sKSAhPT0gbnVsbCkgb3V0LnB1c2goeyByb3c6IHIsIGNvbCB9KTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3NpdGlvbnNJblJhZGl1cyhjZW50ZXJSb3c6IG51bWJlciwgY2VudGVyQ29sOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogR3JpZFBvc2l0aW9uW10ge1xyXG4gICAgICAgIGNvbnN0IG91dDogR3JpZFBvc2l0aW9uW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByID0gY2VudGVyUm93IC0gcmFkaXVzOyByIDw9IGNlbnRlclJvdyArIHJhZGl1czsgcisrKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gY2VudGVyQ29sIC0gcmFkaXVzOyBjIDw9IGNlbnRlckNvbCArIHJhZGl1czsgYysrKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5pbkJvdW5kcyhyLCBjKSAmJiB0aGlzLmdyaWQuZ2V0KHIsIGMpICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHsgcm93OiByLCBjb2w6IGMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxsTm9uTnVsbFBvc2l0aW9ucygpOiBHcmlkUG9zaXRpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jb2xsZWN0KCh2LCByLCBjKSA9PiB2ICE9PSBudWxsID8geyByb3c6IHIsIGNvbDogYyB9IDogbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmFuZG9tQ29sb3IoKTogVGlsZUNvbG9yIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogVElMRV9DT0xPUl9DT1VOVCkgYXMgVGlsZUNvbG9yO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==