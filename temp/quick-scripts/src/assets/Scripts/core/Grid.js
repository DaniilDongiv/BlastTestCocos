"use strict";
cc._RF.push(module, '8bfc3ThvQVBNrf+7J4a+YPF', 'Grid');
// Scripts/core/Grid.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(rows, cols, data) {
        this.rows = rows;
        this.cols = cols;
        this.data = data;
    }
    Grid.create = function (rows, cols, init) {
        var data = new Array(rows * cols);
        for (var r = 0; r < rows; r++)
            for (var c = 0; c < cols; c++)
                data[r * cols + c] = init(r, c);
        return new Grid(rows, cols, data);
    };
    Grid.filled = function (rows, cols, value) {
        return new Grid(rows, cols, new Array(rows * cols).fill(value));
    };
    Grid.prototype.get = function (row, col) {
        return this.data[row * this.cols + col];
    };
    Grid.prototype.set = function (row, col, value) {
        this.data[row * this.cols + col] = value;
    };
    Grid.prototype.swap = function (r1, c1, r2, c2) {
        var i = r1 * this.cols + c1;
        var j = r2 * this.cols + c2;
        var tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    };
    Grid.prototype.inBounds = function (row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    };
    Grid.prototype.forEach = function (fn) {
        for (var r = 0; r < this.rows; r++)
            for (var c = 0; c < this.cols; c++)
                fn(this.data[r * this.cols + c], r, c);
    };
    Grid.prototype.collect = function (fn) {
        var out = [];
        for (var r = 0; r < this.rows; r++)
            for (var c = 0; c < this.cols; c++) {
                var result = fn(this.data[r * this.cols + c], r, c);
                if (result !== null)
                    out.push(result);
            }
        return out;
    };
    return Grid;
}());
exports.Grid = Grid;

cc._RF.pop();