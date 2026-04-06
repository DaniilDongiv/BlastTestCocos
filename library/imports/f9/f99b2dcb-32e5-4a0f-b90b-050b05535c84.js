"use strict";
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