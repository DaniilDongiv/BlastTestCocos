
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/MatchResolver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29yZVxcTWF0Y2hSZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0U7QUFHaEUsSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBUyxJQUFhLE9BQUcsQ0FBQyxTQUFJLENBQUcsRUFBWCxDQUFXLENBQUM7QUFFN0Q7SUFBQTtJQTRGQSxDQUFDO0lBeEZpQix1QkFBUyxHQUF2QixVQUNJLElBQTJCLEVBQzNCLFFBQWdCLEVBQ2hCLFFBQWdCO1FBRWhCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxxQkFBYSxDQUFDLElBQUksRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN6RDtRQUVELElBQU0sTUFBTSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNsQyxJQUFNLEtBQUssR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFtQixDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUV4QyxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUcsQ0FBQztZQUMzQixLQUFLLENBQUMsSUFBSSxDQUFD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LENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFVLENBQUM7SUEwRi9FLG9CQUFDO0NBNUZELEFBNEZDLElBQUE7QUE1Rlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsRGF0YSwgR3JpZFBvc2l0aW9uLCBTdXBlclRpbGVUeXBlIH0gZnJvbSAnLi9UeXBlcyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL0dyaWQnO1xyXG5cclxuY29uc3QgcG9zS2V5ID0gKHI6IG51bWJlciwgYzogbnVtYmVyKTogc3RyaW5nID0+IGAke3J9LCR7Y31gO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGNoUmVzb2x2ZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERJUlMgPSBbWy0xLCAwXSwgWzEsIDBdLCBbMCwgLTFdLCBbMCwgMV1dIGFzIGNvbnN0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZmluZEdyb3VwKFxyXG4gICAgICAgIGdyaWQ6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPixcclxuICAgICAgICBzdGFydFJvdzogbnVtYmVyLFxyXG4gICAgICAgIHN0YXJ0Q29sOiBudW1iZXIsXHJcbiAgICApOiBHcmlkUG9zaXRpb25bXSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGdyaWQuZ2V0KHN0YXJ0Um93LCBzdGFydENvbCk7XHJcblxyXG4gICAgICAgIGlmICghY2VsbCB8fCBjZWxsLnN1cGVyVHlwZSAhPT0gU3VwZXJUaWxlVHlwZS5Ob25lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsID8gW3sgcm93OiBzdGFydFJvdywgY29sOiBzdGFydENvbCB9XSA6IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ICA9IGNlbGwuY29sb3I7XHJcbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwOiBHcmlkUG9zaXRpb25bXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHF1ZXVlOiBHcmlkUG9zaXRpb25bXSA9IFt7IHJvdzogc3RhcnRSb3csIGNvbDogc3RhcnRDb2wgfV07XHJcbiAgICAgICAgdmlzaXRlZC5hZGQocG9zS2V5KHN0YXJ0Um93LCBzdGFydENvbCkpO1xyXG5cclxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXIgPSBxdWV1ZS5zaGlmdCgpITtcclxuICAgICAgICAgICAgZ3JvdXAucHVzaChjdXIpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBbZHIsIGRjXSBvZiB0aGlzLkRJUlMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5yID0gY3VyLnJvdyArIGRyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmMgPSBjdXIuY29sICsgZGM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwb3NLZXkobnIsIG5jKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5pbkJvdW5kcyhuciwgbmMpIHx8IHZpc2l0ZWQuaGFzKGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBncmlkLmdldChuciwgbmMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gJiYgbi5zdXBlclR5cGUgPT09IFN1cGVyVGlsZVR5cGUuTm9uZSAmJiBuLmNvbG9yID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyByb3c6IG5yLCBjb2w6IG5jIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBncm91cDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc0FueVZhbGlkR3JvdXAoXHJcbiAgICAgICAgZ3JpZDogR3JpZDxDZWxsRGF0YSB8IG51bGw+LFxyXG4gICAgICAgIG1pbkdyb3VwU2l6ZTogbnVtYmVyLFxyXG4gICAgKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IGdyaWQucm93czsgcisrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgZ3JpZC5jb2xzOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBncmlkLmdldChyLCBjKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2VsbCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5zdXBlclR5cGUgIT09IFN1cGVyVGlsZVR5cGUuTm9uZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlzaXRlZC5oYXMocG9zS2V5KHIsIGMpKSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZnNDb3VudChncmlkLCByLCBjLCB2aXNpdGVkKSA+PSBtaW5Hcm91cFNpemUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBiZnNDb3VudChcclxuICAgICAgICBncmlkOiBHcmlkPENlbGxEYXRhIHwgbnVsbD4sXHJcbiAgICAgICAgc3RhcnRSb3c6IG51bWJlcixcclxuICAgICAgICBzdGFydENvbDogbnVtYmVyLFxyXG4gICAgICAgIHZpc2l0ZWQ6IFNldDxzdHJpbmc+LFxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZ3JpZC5nZXQoc3RhcnRSb3csIHN0YXJ0Q29sKTtcclxuICAgICAgICBpZiAoIWNlbGwgfHwgY2VsbC5zdXBlclR5cGUgIT09IFN1cGVyVGlsZVR5cGUuTm9uZSkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNlbGwuY29sb3I7XHJcbiAgICAgICAgY29uc3QgcXVldWU6IEdyaWRQb3NpdGlvbltdID0gW3sgcm93OiBzdGFydFJvdywgY29sOiBzdGFydENvbCB9XTtcclxuICAgICAgICB2aXNpdGVkLmFkZChwb3NLZXkoc3RhcnRSb3csIHN0YXJ0Q29sKSk7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyID0gcXVldWUuc2hpZnQoKSE7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtkciwgZGNdIG9mIHRoaXMuRElSUykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnIgPSBjdXIucm93ICsgZHI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYyA9IGN1ci5jb2wgKyBkYztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBvc0tleShuciwgbmMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkLmluQm91bmRzKG5yLCBuYykgfHwgdmlzaXRlZC5oYXMoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IGdyaWQuZ2V0KG5yLCBuYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobiAmJiBuLnN1cGVyVHlwZSA9PT0gU3VwZXJUaWxlVHlwZS5Ob25lICYmIG4uY29sb3IgPT09IHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWQuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IHJvdzogbnIsIGNvbDogbmMgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==