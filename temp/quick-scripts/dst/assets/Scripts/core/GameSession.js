
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/GameSession.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3afeanxLyNNV7rB7s8iPEap', 'GameSession');
// Scripts/core/GameSession.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSession = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Types_1 = require("./Types");
var GameSession = /** @class */ (function () {
    function GameSession() {
        this.score = 0;
        this.result = Types_1.GameResult.None;
        this.boosterCounts = new Map();
        this.movesRemaining = GameConfig_1.GameConfig.MAX_MOVES;
        this.targetScore = GameConfig_1.GameConfig.TARGET_SCORE;
        this.shufflesRemaining = GameConfig_1.GameConfig.MAX_SHUFFLES;
        this.boosterCounts.set(Types_1.BoosterType.Bomb, GameConfig_1.GameConfig.INITIAL_BOMB_COUNT);
        this.boosterCounts.set(Types_1.BoosterType.Teleport, GameConfig_1.GameConfig.INITIAL_TELEPORT_COUNT);
    }
    GameSession.prototype.getScore = function () { return this.score; };
    GameSession.prototype.getTargetScore = function () { return this.targetScore; };
    GameSession.prototype.calcGroupScore = function (groupSize) {
        return Math.floor(GameConfig_1.GameConfig.BASE_POINTS_PER_TILE * groupSize * (groupSize - 1) / 2);
    };
    GameSession.prototype.calcEffectScore = function (tilesDestroyed) {
        return GameConfig_1.GameConfig.BASE_POINTS_PER_TILE * tilesDestroyed;
    };
    GameSession.prototype.addScore = function (pts) { this.score += pts; };
    GameSession.prototype.getMovesRemaining = function () { return this.movesRemaining; };
    GameSession.prototype.consumeMove = function () {
        if (this.movesRemaining > 0)
            this.movesRemaining--;
    };
    GameSession.prototype.getShufflesRemaining = function () { return this.shufflesRemaining; };
    GameSession.prototype.consumeShuffle = function () {
        if (this.shufflesRemaining > 0) {
            this.shufflesRemaining--;
            return true;
        }
        return false;
    };
    GameSession.prototype.getBoosterCount = function (type) {
        return this.boosterCounts.get(type) || 0;
    };
    GameSession.prototype.consumeBooster = function (type) {
        var c = this.getBoosterCount(type);
        if (c > 0) {
            this.boosterCounts.set(type, c - 1);
            return true;
        }
        return false;
    };
    GameSession.prototype.getResult = function () { return this.result; };
    GameSession.prototype.isGameOver = function () { return this.result !== Types_1.GameResult.None; };
    GameSession.prototype.checkWin = function () {
        if (this.score >= this.targetScore) {
            this.result = Types_1.GameResult.Win;
            return true;
        }
        return false;
    };
    GameSession.prototype.checkLose = function () {
        if (this.movesRemaining <= 0 && this.score < this.targetScore) {
            this.result = Types_1.GameResult.Lose;
            return true;
        }
        return false;
    };
    GameSession.prototype.forceLose = function () { this.result = Types_1.GameResult.Lose; };
    return GameSession;
}());
exports.GameSession = GameSession;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29yZVxcR2FtZVNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELGlDQUFrRDtBQUVsRDtJQVVJO1FBUlEsVUFBSyxHQUFjLENBQUMsQ0FBQztRQUlyQixXQUFNLEdBQWUsa0JBQVUsQ0FBQyxJQUFJLENBQUM7UUFFNUIsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUc1RCxJQUFJLENBQUMsY0FBYyxHQUFNLHVCQUFVLENBQUMsU0FBUyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQVMsdUJBQVUsQ0FBQyxZQUFZLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUFDO1FBRWpELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLG1CQUFXLENBQUMsSUFBSSxFQUFNLHVCQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxtQkFBVyxDQUFDLFFBQVEsRUFBRSx1QkFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLDhCQUFRLEdBQWYsY0FBa0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxvQ0FBYyxHQUFyQixjQUFrQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXJELG9DQUFjLEdBQXJCLFVBQXNCLFNBQWlCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU0scUNBQWUsR0FBdEIsVUFBdUIsY0FBc0I7UUFDekMsT0FBTyx1QkFBVSxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sOEJBQVEsR0FBZixVQUFnQixHQUFXLElBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWxELHVDQUFpQixHQUF4QixjQUFxQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRTNELGlDQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVNLDBDQUFvQixHQUEzQixjQUF3QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFakUsb0NBQWMsR0FBckI7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUFDLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFDMUUsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHFDQUFlLEdBQXRCLFVBQXVCLElBQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxvQ0FBYyxHQUFyQixVQUFzQixJQUFpQjtRQUNuQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztTQUFFO1FBQ2hFLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwrQkFBUyxHQUFoQixjQUFpQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9DLGdDQUFVLEdBQWpCLGNBQWlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxrQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFbkUsOEJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBVSxDQUFDLEdBQUcsQ0FBQztZQUFDLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFDbEYsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLCtCQUFTLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBVSxDQUFDLElBQUksQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLGNBQTJCLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELGtCQUFDO0FBQUQsQ0F4RUEsQUF3RUMsSUFBQTtBQXhFWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tICcuLi9jb25maWcvR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEJvb3N0ZXJUeXBlLCBHYW1lUmVzdWx0IH0gZnJvbSAnLi9UeXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNlc3Npb24ge1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmUgICAgICAgICAgICA9IDA7XHJcbiAgICBwcml2YXRlIG1vdmVzUmVtYWluaW5nOiAgbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXRTY29yZTogICAgIG51bWJlcjtcclxuICAgIHByaXZhdGUgc2h1ZmZsZXNSZW1haW5pbmc6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVzdWx0OiBHYW1lUmVzdWx0ID0gR2FtZVJlc3VsdC5Ob25lO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9vc3RlckNvdW50cyA9IG5ldyBNYXA8Qm9vc3RlclR5cGUsIG51bWJlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vdmVzUmVtYWluaW5nICAgID0gR2FtZUNvbmZpZy5NQVhfTU9WRVM7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTY29yZSAgICAgICA9IEdhbWVDb25maWcuVEFSR0VUX1NDT1JFO1xyXG4gICAgICAgIHRoaXMuc2h1ZmZsZXNSZW1haW5pbmcgPSBHYW1lQ29uZmlnLk1BWF9TSFVGRkxFUztcclxuXHJcbiAgICAgICAgdGhpcy5ib29zdGVyQ291bnRzLnNldChCb29zdGVyVHlwZS5Cb21iLCAgICAgR2FtZUNvbmZpZy5JTklUSUFMX0JPTUJfQ09VTlQpO1xyXG4gICAgICAgIHRoaXMuYm9vc3RlckNvdW50cy5zZXQoQm9vc3RlclR5cGUuVGVsZXBvcnQsIEdhbWVDb25maWcuSU5JVElBTF9URUxFUE9SVF9DT1VOVCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjb3JlKCk6IG51bWJlciAgICAgICB7IHJldHVybiB0aGlzLnNjb3JlOyB9XHJcbiAgICBwdWJsaWMgZ2V0VGFyZ2V0U2NvcmUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudGFyZ2V0U2NvcmU7IH1cclxuXHJcbiAgICBwdWJsaWMgY2FsY0dyb3VwU2NvcmUoZ3JvdXBTaXplOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKEdhbWVDb25maWcuQkFTRV9QT0lOVFNfUEVSX1RJTEUgKiBncm91cFNpemUgKiAoZ3JvdXBTaXplIC0gMSkgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsY0VmZmVjdFNjb3JlKHRpbGVzRGVzdHJveWVkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLkJBU0VfUE9JTlRTX1BFUl9USUxFICogdGlsZXNEZXN0cm95ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNjb3JlKHB0czogbnVtYmVyKTogdm9pZCB7IHRoaXMuc2NvcmUgKz0gcHRzOyB9XHJcblxyXG4gICAgcHVibGljIGdldE1vdmVzUmVtYWluaW5nKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1vdmVzUmVtYWluaW5nOyB9XHJcblxyXG4gICAgcHVibGljIGNvbnN1bWVNb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVzUmVtYWluaW5nID4gMCkgdGhpcy5tb3Zlc1JlbWFpbmluZy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaHVmZmxlc1JlbWFpbmluZygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5zaHVmZmxlc1JlbWFpbmluZzsgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdW1lU2h1ZmZsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zaHVmZmxlc1JlbWFpbmluZyA+IDApIHsgdGhpcy5zaHVmZmxlc1JlbWFpbmluZy0tOyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Qm9vc3RlckNvdW50KHR5cGU6IEJvb3N0ZXJUeXBlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib29zdGVyQ291bnRzLmdldCh0eXBlKSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdW1lQm9vc3Rlcih0eXBlOiBCb29zdGVyVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmdldEJvb3N0ZXJDb3VudCh0eXBlKTtcclxuICAgICAgICBpZiAoYyA+IDApIHsgdGhpcy5ib29zdGVyQ291bnRzLnNldCh0eXBlLCBjIC0gMSk7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXN1bHQoKTogR2FtZVJlc3VsdCB7IHJldHVybiB0aGlzLnJlc3VsdDsgfVxyXG4gICAgcHVibGljIGlzR2FtZU92ZXIoKTogYm9vbGVhbiAgIHsgcmV0dXJuIHRoaXMucmVzdWx0ICE9PSBHYW1lUmVzdWx0Lk5vbmU7IH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gdGhpcy50YXJnZXRTY29yZSkgeyB0aGlzLnJlc3VsdCA9IEdhbWVSZXN1bHQuV2luOyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tMb3NlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVzUmVtYWluaW5nIDw9IDAgJiYgdGhpcy5zY29yZSA8IHRoaXMudGFyZ2V0U2NvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBHYW1lUmVzdWx0Lkxvc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcmNlTG9zZSgpOiB2b2lkIHsgdGhpcy5yZXN1bHQgPSBHYW1lUmVzdWx0Lkxvc2U7IH1cclxufVxyXG4iXX0=