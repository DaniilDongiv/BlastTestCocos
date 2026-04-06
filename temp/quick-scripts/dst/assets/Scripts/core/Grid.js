
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/Grid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29yZVxcR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVJLGNBQ2EsSUFBWSxFQUNaLElBQVksRUFDSixJQUFTO1FBRmpCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ0osU0FBSSxHQUFKLElBQUksQ0FBSztJQUMzQixDQUFDO0lBRUcsV0FBTSxHQUFiLFVBQWlCLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBcUM7UUFDOUUsSUFBTSxJQUFJLEdBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sV0FBTSxHQUFiLFVBQWlCLElBQVksRUFBRSxJQUFZLEVBQUUsS0FBUTtRQUNqRCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxrQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxrQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFRO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFRCxtQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUMvQyxJQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsR0FBVyxFQUFFLEdBQVc7UUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQztJQUVELHNCQUFPLEdBQVAsVUFBUSxFQUFnRDtRQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNCQUFPLEdBQVAsVUFBVyxFQUFvRDtRQUMzRCxJQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQUksTUFBTSxLQUFLLElBQUk7b0JBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztRQUNMLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQXZEQSxBQXVEQyxJQUFBO0FBdkRZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyaWQ8VD4ge1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgcm93czogbnVtYmVyLFxyXG4gICAgICAgIHJlYWRvbmx5IGNvbHM6IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IFRbXSxcclxuICAgICkge31cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlPFQ+KHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyLCBpbml0OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBUKTogR3JpZDxUPiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogVFtdID0gbmV3IEFycmF5KHJvd3MgKiBjb2xzKTtcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjKyspXHJcbiAgICAgICAgICAgICAgICBkYXRhW3IgKiBjb2xzICsgY10gPSBpbml0KHIsIGMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JpZChyb3dzLCBjb2xzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsbGVkPFQ+KHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyLCB2YWx1ZTogVCk6IEdyaWQ8VD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JpZChyb3dzLCBjb2xzLCBuZXcgQXJyYXk8VD4ocm93cyAqIGNvbHMpLmZpbGwodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtyb3cgKiB0aGlzLmNvbHMgKyBjb2xdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhW3JvdyAqIHRoaXMuY29scyArIGNvbF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwKHIxOiBudW1iZXIsIGMxOiBudW1iZXIsIHIyOiBudW1iZXIsIGMyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpID0gcjEgKiB0aGlzLmNvbHMgKyBjMTtcclxuICAgICAgICBjb25zdCBqID0gcjIgKiB0aGlzLmNvbHMgKyBjMjtcclxuICAgICAgICBjb25zdCB0bXAgPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgICAgdGhpcy5kYXRhW2ldID0gdGhpcy5kYXRhW2pdO1xyXG4gICAgICAgIHRoaXMuZGF0YVtqXSA9IHRtcDtcclxuICAgIH1cclxuXHJcbiAgICBpbkJvdW5kcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcm93ID49IDAgJiYgcm93IDwgdGhpcy5yb3dzICYmIGNvbCA+PSAwICYmIGNvbCA8IHRoaXMuY29scztcclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKGZuOiAodmFsdWU6IFQsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3dzOyByKyspXHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb2xzOyBjKyspXHJcbiAgICAgICAgICAgICAgICBmbih0aGlzLmRhdGFbciAqIHRoaXMuY29scyArIGNdLCByLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsZWN0PFU+KGZuOiAodmFsdWU6IFQsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gVSB8IG51bGwpOiBVW10ge1xyXG4gICAgICAgIGNvbnN0IG91dDogVVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLnJvd3M7IHIrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbHM7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4odGhpcy5kYXRhW3IgKiB0aGlzLmNvbHMgKyBjXSwgciwgYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSBvdXQucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG4iXX0=