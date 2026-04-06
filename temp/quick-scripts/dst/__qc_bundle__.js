
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/BlastGame');
require('./assets/Scripts/config/GameConfig');
require('./assets/Scripts/core/FieldModel');
require('./assets/Scripts/core/GameSession');
require('./assets/Scripts/core/Grid');
require('./assets/Scripts/core/MatchResolver');
require('./assets/Scripts/core/Types');
require('./assets/Scripts/input/InputState');
require('./assets/Scripts/rendering/FieldRenderer');
require('./assets/Scripts/rendering/HUDPresenter');
require('./assets/Scripts/rendering/ResultPopup');
require('./assets/Scripts/rendering/TileRenderer');
require('./assets/Scripts/strategies/SuperTileStrategy');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/rendering/FieldRenderer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fca13Je9dHpYdnvp1p5mhR', 'FieldRenderer');
// Scripts/rendering/FieldRenderer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var TileRenderer_1 = require("./TileRenderer");
var GameConfig_1 = require("../config/GameConfig");
var Grid_1 = require("../core/Grid");
var Types_1 = require("../core/Types");
var ccclass = cc._decorator.ccclass;
var FieldRenderer = /** @class */ (function (_super) {
    __extends(FieldRenderer, _super);
    function FieldRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.effectAnimators = new Map();
        _this.nodes = Grid_1.Grid.filled(0, 0, null);
        _this.renderers = Grid_1.Grid.filled(0, 0, null);
        _this.colorSprites = [];
        _this.superSprites = new Map();
        _this.cellW = 0;
        _this.cellH = 0;
        _this.originX = 0;
        _this.originY = 0;
        _this.onCellClick = null;
        return _this;
    }
    FieldRenderer.prototype.init = function (rows, cols, colorSprites, superSprites, onClick) {
        this.colorSprites = colorSprites;
        this.superSprites = superSprites;
        this.onCellClick = onClick;
        this.cellW = GameConfig_1.GameConfig.TILE_WIDTH + GameConfig_1.GameConfig.CELL_GAP;
        this.cellH = GameConfig_1.GameConfig.TILE_HEIGHT + GameConfig_1.GameConfig.CELL_GAP;
        var gridW = cols * this.cellW - GameConfig_1.GameConfig.CELL_GAP;
        var gridH = rows * this.cellH - GameConfig_1.GameConfig.CELL_GAP;
        this.originX = -gridW / 2 + GameConfig_1.GameConfig.TILE_WIDTH / 2;
        this.originY = -gridH / 2 + GameConfig_1.GameConfig.TILE_HEIGHT / 2;
        this.nodes = Grid_1.Grid.filled(rows, cols, null);
        this.renderers = Grid_1.Grid.filled(rows, cols, null);
        this.initEffectAnimators();
        this.node.on(cc.Node.EventType.TOUCH_END, this.handleTouch, this);
    };
    FieldRenderer.prototype.initEffectAnimators = function () {
        var _this = this;
        this.effectAnimators.set(Types_1.SuperTileType.RowClear, function (c, p) { return _this.animateRowClear(c, p); });
        this.effectAnimators.set(Types_1.SuperTileType.ColumnClear, function (c, p) { return _this.animateColumnClear(c, p); });
        this.effectAnimators.set(Types_1.SuperTileType.RadiusBomb, function (c, p) { return _this.animateBombBlast(c, p); });
        this.effectAnimators.set(Types_1.SuperTileType.FieldClear, function (c, p) { return _this.animateFieldClear(c, p); });
    };
    FieldRenderer.prototype.animateSuperEffect = function (type, center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var animator;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        animator = this.effectAnimators.get(type);
                        if (!animator) return [3 /*break*/, 2];
                        return [4 /*yield*/, animator(center, positions)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.animateDestroy(positions)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.cellPos = function (row, col) {
        return cc.v2(this.originX + col * this.cellW, this.originY + row * this.cellH);
    };
    FieldRenderer.prototype.createAllTiles = function (grid) {
        var _this = this;
        grid.forEach(function (cell, r, c) {
            if (cell)
                _this.makeTile(r, c, cell);
        });
    };
    FieldRenderer.prototype.clearAllTiles = function () {
        var _a = this.nodes, rows = _a.rows, cols = _a.cols;
        for (var r = 0; r < rows; r++)
            for (var c = 0; c < cols; c++)
                this.killTile(r, c);
    };
    FieldRenderer.prototype.placeSuperTile = function (row, col, cell) {
        this.killTile(row, col);
        this.makeTile(row, col, cell);
    };
    FieldRenderer.prototype.rebuildInstant = function (grid) {
        this.clearAllTiles();
        this.createAllTiles(grid);
    };
    FieldRenderer.prototype.animateDestroy = function (positions) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks, _i, positions_1, pos, r, _a, positions_2, pos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tasks = [];
                        for (_i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
                            pos = positions_1[_i];
                            r = this.renderers.get(pos.row, pos.col);
                            if (r)
                                tasks.push(r.playDestroy(GameConfig_1.GameConfig.DESTROY_DURATION));
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        for (_a = 0, positions_2 = positions; _a < positions_2.length; _a++) {
                            pos = positions_2[_a];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateBombBlast = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var waveDelay, flashDur, shrinkDur, flashScale, tasks, _loop_1, this_1, _i, positions_3, pos, _a, positions_4, pos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        waveDelay = GameConfig_1.GameConfig.BOMB_WAVE_DELAY_PER_DIST;
                        flashDur = GameConfig_1.GameConfig.BOMB_FLASH_DURATION;
                        shrinkDur = GameConfig_1.GameConfig.BOMB_SHRINK_DURATION;
                        flashScale = GameConfig_1.GameConfig.BOMB_FLASH_SCALE;
                        tasks = [];
                        _loop_1 = function (pos) {
                            var n = this_1.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.row - center.row) + Math.abs(pos.col - center.col);
                            var delay = dist * waveDelay;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(flashDur, { scale: flashScale }, { easing: 'backOut' })
                                    .to(shrinkDur, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_1 = this;
                        for (_i = 0, positions_3 = positions; _i < positions_3.length; _i++) {
                            pos = positions_3[_i];
                            _loop_1(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        for (_a = 0, positions_4 = positions; _a < positions_4.length; _a++) {
                            pos = positions_4[_a];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateRowClear = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var cfg, _a, rows, cols, beamY, fullW, tasks, _loop_2, this_2, _i, positions_5, pos, _b, positions_6, pos;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cfg = GameConfig_1.GameConfig;
                        _a = this.nodes, rows = _a.rows, cols = _a.cols;
                        beamY = this.cellPos(center.row, 0).y;
                        fullW = cols * this.cellW + cfg.TILE_WIDTH;
                        this.makeBeam(0, beamY, fullW, cfg.LINE_BEAM_HEIGHT, true);
                        tasks = [];
                        _loop_2 = function (pos) {
                            var n = this_2.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.col - center.col);
                            var delay = dist * cfg.LINE_SWEEP_DELAY_PER_CELL;
                            var dir = pos.col >= center.col ? 1 : -1;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(cfg.LINE_STRETCH_DUR, { scaleX: 1.5, scaleY: 0.55 }, { easing: 'backOut' })
                                    .to(cfg.LINE_SHRINK_DUR, { scale: 0, opacity: 0, angle: 20 * dir }, { easing: 'sineIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_2 = this;
                        for (_i = 0, positions_5 = positions; _i < positions_5.length; _i++) {
                            pos = positions_5[_i];
                            _loop_2(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _c.sent();
                        for (_b = 0, positions_6 = positions; _b < positions_6.length; _b++) {
                            pos = positions_6[_b];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateColumnClear = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var cfg, _a, rows, cols, beamX, fullH, tasks, _loop_3, this_3, _i, positions_7, pos, _b, positions_8, pos;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cfg = GameConfig_1.GameConfig;
                        _a = this.nodes, rows = _a.rows, cols = _a.cols;
                        beamX = this.cellPos(0, center.col).x;
                        fullH = rows * this.cellH + cfg.TILE_HEIGHT;
                        this.makeBeam(beamX, 0, cfg.LINE_BEAM_HEIGHT, fullH, false);
                        tasks = [];
                        _loop_3 = function (pos) {
                            var n = this_3.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.row - center.row);
                            var delay = dist * cfg.LINE_SWEEP_DELAY_PER_CELL;
                            var dir = pos.row >= center.row ? 1 : -1;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(cfg.LINE_STRETCH_DUR, { scaleX: 0.55, scaleY: 1.5 }, { easing: 'backOut' })
                                    .to(cfg.LINE_SHRINK_DUR, { scale: 0, opacity: 0, angle: 20 * dir }, { easing: 'sineIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_3 = this;
                        for (_i = 0, positions_7 = positions; _i < positions_7.length; _i++) {
                            pos = positions_7[_i];
                            _loop_3(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _c.sent();
                        for (_b = 0, positions_8 = positions; _b < positions_8.length; _b++) {
                            pos = positions_8[_b];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateFieldClear = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var cfg, tasks, _loop_4, this_4, _i, positions_9, pos, _a, positions_10, pos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cfg = GameConfig_1.GameConfig;
                        tasks = [];
                        _loop_4 = function (pos) {
                            var n = this_4.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.row - center.row) + Math.abs(pos.col - center.col);
                            var delay = dist * cfg.FIELD_CLEAR_DELAY_PER_DIST;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(cfg.FIELD_CLEAR_FLASH_DUR, { scale: 1.35 }, { easing: 'backOut' })
                                    .to(cfg.FIELD_CLEAR_SHRINK_DUR, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_4 = this;
                        for (_i = 0, positions_9 = positions; _i < positions_9.length; _i++) {
                            pos = positions_9[_i];
                            _loop_4(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        for (_a = 0, positions_10 = positions; _a < positions_10.length; _a++) {
                            pos = positions_10[_a];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.makeBeam = function (x, y, w, h, horizontal) {
        var cfg = GameConfig_1.GameConfig;
        var beam = new cc.Node('Beam');
        beam.parent = this.node;
        beam.zIndex = 9998;
        beam.setPosition(x, y);
        beam.opacity = 220;
        if (horizontal) {
            beam.scaleX = 0;
            beam.scaleY = 1;
        }
        else {
            beam.scaleX = 1;
            beam.scaleY = 0;
        }
        var gfx = beam.addComponent(cc.Graphics);
        gfx.fillColor = cc.color(255, 255, 160, 220);
        gfx.rect(-w / 2, -h / 2, w, h);
        gfx.fill();
        var expandProp = horizontal ? { scaleX: 1 } : { scaleY: 1 };
        var fadeProp = horizontal
            ? { opacity: 0, scaleY: 4 }
            : { opacity: 0, scaleX: 4 };
        cc.tween(beam)
            .to(cfg.LINE_BEAM_EXPAND_DUR, expandProp, { easing: 'sineOut' })
            .to(cfg.LINE_BEAM_FADE_DUR, fadeProp, { easing: 'sineOut' })
            .call(function () { return beam.destroy(); })
            .start();
        return beam;
    };
    FieldRenderer.prototype.animateGravity = function (moves) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks, _i, moves_1, m, n, r, target, dist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        for (_i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
                            m = moves_1[_i];
                            n = this.nodes.get(m.from.row, m.from.col);
                            r = this.renderers.get(m.from.row, m.from.col);
                            if (!n || !r)
                                continue;
                            this.nodes.set(m.to.row, m.to.col, n);
                            this.renderers.set(m.to.row, m.to.col, r);
                            this.nodes.set(m.from.row, m.from.col, null);
                            this.renderers.set(m.from.row, m.from.col, null);
                            target = this.cellPos(m.to.row, m.to.col);
                            dist = m.from.row - m.to.row;
                            tasks.push(r.playFall(target.y, dist * GameConfig_1.GameConfig.FALL_DURATION_PER_CELL));
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateSpawn = function (spawned) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks, _i, spawned_1, s, target, startY, n, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        for (_i = 0, spawned_1 = spawned; _i < spawned_1.length; _i++) {
                            s = spawned_1[_i];
                            target = this.cellPos(s.position.row, s.position.col);
                            startY = target.y + s.fallDistance * this.cellH;
                            n = this.makeTile(s.position.row, s.position.col, s.cell);
                            if (!n)
                                continue;
                            n.y = startY;
                            n.scale = 1;
                            n.opacity = 255;
                            r = this.renderers.get(s.position.row, s.position.col);
                            if (r)
                                tasks.push(r.playFall(target.y, s.fallDistance * GameConfig_1.GameConfig.FALL_DURATION_PER_CELL));
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateSingleSpawn = function (row, col) {
        return __awaiter(this, void 0, Promise, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.renderers.get(row, col);
                        if (!r) return [3 /*break*/, 2];
                        return [4 /*yield*/, r.playSpawn(GameConfig_1.GameConfig.SPAWN_DURATION)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateSwap = function (a, b) {
        return __awaiter(this, void 0, Promise, function () {
            var ra, rb, pa, pb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ra = this.renderers.get(a.row, a.col);
                        rb = this.renderers.get(b.row, b.col);
                        if (!ra || !rb)
                            return [2 /*return*/];
                        pa = this.cellPos(b.row, b.col);
                        pb = this.cellPos(a.row, a.col);
                        this.swapRefs(a, b);
                        return [4 /*yield*/, Promise.all([
                                ra.playMoveTo(pa, GameConfig_1.GameConfig.SWAP_DURATION),
                                rb.playMoveTo(pb, GameConfig_1.GameConfig.SWAP_DURATION),
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateShuffle = function (grid) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animateAllScale(0, GameConfig_1.GameConfig.SHUFFLE_HALF_DURATION)];
                    case 1:
                        _a.sent();
                        this.clearAllTiles();
                        this.createAllTiles(grid);
                        this.forEachNode(function (n) { n.scale = 0; });
                        return [4 /*yield*/, this.animateAllScale(1, GameConfig_1.GameConfig.SHUFFLE_HALF_DURATION)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateInitialAppearance = function () {
        return __awaiter(this, void 0, Promise, function () {
            var colDelay, rowDelay, fallDur, offsetY, _a, rows, cols, tasks, c, _loop_5, this_5, r;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        colDelay = GameConfig_1.GameConfig.CASCADE_COL_DELAY;
                        rowDelay = GameConfig_1.GameConfig.CASCADE_ROW_DELAY;
                        fallDur = GameConfig_1.GameConfig.CASCADE_FALL_DURATION;
                        offsetY = GameConfig_1.GameConfig.CASCADE_START_OFFSET_Y;
                        _a = this.nodes, rows = _a.rows, cols = _a.cols;
                        this.nodes.forEach(function (n) {
                            if (!n)
                                return;
                            n.y += offsetY;
                            n.scale = 0.5;
                            n.opacity = 0;
                        });
                        tasks = [];
                        for (c = 0; c < cols; c++) {
                            _loop_5 = function (r) {
                                var n = this_5.nodes.get(r, c);
                                if (!n)
                                    return "continue";
                                var target = this_5.cellPos(r, c);
                                var delay = c * colDelay + (rows - 1 - r) * rowDelay;
                                tasks.push(new Promise(function (resolve) {
                                    cc.tween(n)
                                        .delay(delay)
                                        .call(function () { n.opacity = 255; })
                                        .to(fallDur, { y: target.y, scale: 1 }, { easing: 'bounceOut' })
                                        .call(function () { return resolve(); })
                                        .start();
                                }));
                            };
                            this_5 = this;
                            for (r = rows - 1; r >= 0; r--) {
                                _loop_5(r);
                            }
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateDismissAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animateAllScale(0, GameConfig_1.GameConfig.DISMISS_DURATION)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.showFloatingScore = function (row, col, amount, font) {
        var pos = this.cellPos(row, col);
        var n = new cc.Node('ScorePopup');
        n.parent = this.node;
        n.zIndex = 9999;
        n.setPosition(pos.x, pos.y + 20);
        n.scale = 0.4;
        n.opacity = 255;
        var label = n.addComponent(cc.Label);
        label.string = "+" + amount;
        label.fontSize = GameConfig_1.GameConfig.SCORE_POPUP_FONT_SIZE;
        label.lineHeight = GameConfig_1.GameConfig.SCORE_POPUP_FONT_SIZE + 4;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        if (font) {
            label.font = font;
            label.useSystemFont = false;
        }
        n.color = cc.color(255, 245, 60);
        var growDur = GameConfig_1.GameConfig.SCORE_POPUP_GROW_DURATION;
        var floatDur = GameConfig_1.GameConfig.SCORE_POPUP_FLOAT_DURATION;
        var floatY = pos.y + 20 + GameConfig_1.GameConfig.SCORE_POPUP_FLOAT_Y;
        cc.tween(n)
            .to(growDur, { scale: 1.15 }, { easing: 'backOut' })
            .to(floatDur, { y: floatY, opacity: 0, scale: 0.85 }, { easing: 'sineOut' })
            .call(function () { return n.destroy(); })
            .start();
    };
    FieldRenderer.prototype.setTileHighlight = function (row, col, on) {
        var r = this.renderers.get(row, col);
        if (r)
            r.setHighlight(on);
    };
    FieldRenderer.prototype.clearAllHighlights = function () {
        this.renderers.forEach(function (r) {
            if (r)
                r.setHighlight(false);
        });
    };
    FieldRenderer.prototype.handleTouch = function (e) {
        if (!this.onCellClick)
            return;
        var local = this.node.convertToNodeSpaceAR(e.getLocation());
        var _a = this.nodes, rows = _a.rows, cols = _a.cols;
        var col = Math.round((local.x - this.originX) / this.cellW);
        var row = Math.round((local.y - this.originY) / this.cellH);
        if (row < 0 || row >= rows || col < 0 || col >= cols)
            return;
        var c = this.cellPos(row, col);
        if (Math.abs(local.x - c.x) > GameConfig_1.GameConfig.TILE_WIDTH / 2)
            return;
        if (Math.abs(local.y - c.y) > GameConfig_1.GameConfig.TILE_HEIGHT / 2)
            return;
        this.onCellClick(row, col);
    };
    FieldRenderer.prototype.makeTile = function (row, col, cell) {
        var sf = this.resolveSprite(cell);
        if (!sf)
            return null;
        var n = new cc.Node("Tile_" + row + "_" + col);
        n.parent = this.node;
        var p = this.cellPos(row, col);
        n.setPosition(p.x, p.y);
        var r = n.addComponent(TileRenderer_1.default);
        r.init(sf);
        this.nodes.set(row, col, n);
        this.renderers.set(row, col, r);
        return n;
    };
    FieldRenderer.prototype.killTile = function (row, col) {
        var n = this.nodes.get(row, col);
        if (n) {
            n.destroy();
            this.nodes.set(row, col, null);
            this.renderers.set(row, col, null);
        }
    };
    FieldRenderer.prototype.swapRefs = function (a, b) {
        this.nodes.swap(a.row, a.col, b.row, b.col);
        this.renderers.swap(a.row, a.col, b.row, b.col);
    };
    FieldRenderer.prototype.resolveSprite = function (cell) {
        if (cell.superType !== Types_1.SuperTileType.None)
            return this.superSprites.get(cell.superType) || null;
        return this.colorSprites[cell.color] || null;
    };
    FieldRenderer.prototype.animateAllScale = function (target, dur) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        this.forEachNode(function (n) {
                            tasks.push(new Promise(function (res) {
                                cc.tween(n).to(dur, { scale: target }).call(function () { return res(); }).start();
                            }));
                        });
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.forEachNode = function (fn) {
        this.nodes.forEach(function (n) { if (n)
            fn(n); });
    };
    FieldRenderer.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.handleTouch, this);
    };
    FieldRenderer = __decorate([
        ccclass
    ], FieldRenderer);
    return FieldRenderer;
}(cc.Component));
exports.default = FieldRenderer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccmVuZGVyaW5nXFxGaWVsZFJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxtREFBa0Q7QUFDbEQscUNBQW9DO0FBQ3BDLHVDQUd1QjtBQUVmLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBS2xDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBa2VDO1FBaGVvQixxQkFBZSxHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO1FBRXBFLFdBQUssR0FBTyxXQUFJLENBQUMsTUFBTSxDQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELGVBQVMsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUNwQyxrQkFBWSxHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO1FBRXhELFdBQUssR0FBSyxDQUFDLENBQUM7UUFDWixXQUFLLEdBQUssQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixpQkFBVyxHQUFnRCxJQUFJLENBQUM7O0lBbWQ1RSxDQUFDO0lBamRVLDRCQUFJLEdBQVgsVUFDSSxJQUFZLEVBQ1osSUFBWSxFQUNaLFlBQThCLEVBQzlCLFlBQWdELEVBQ2hELE9BQTJDO1FBRTNDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUksT0FBTyxDQUFDO1FBRTVCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJB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S0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxJQUFJLENBQUM7WUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBamVnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa2VqQztJQUFELG9CQUFDO0NBbGVELEFBa2VDLENBbGUwQyxFQUFFLENBQUMsU0FBUyxHQWtldEQ7a0JBbGVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbGVSZW5kZXJlciBmcm9tICcuL1RpbGVSZW5kZXJlcic7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tICcuLi9jb25maWcvR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9jb3JlL0dyaWQnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2VsbERhdGEsIEdyaWRQb3NpdGlvbiwgR3Jhdml0eU1vdmUsIFNwYXduZWRUaWxlLFxyXG4gICAgU3VwZXJUaWxlVHlwZSxcclxufSBmcm9tICcuLi9jb3JlL1R5cGVzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgRWZmZWN0QW5pbWF0b3IgPSAoY2VudGVyOiBHcmlkUG9zaXRpb24sIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pID0+IFByb21pc2U8dm9pZD47XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZFJlbmRlcmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVmZmVjdEFuaW1hdG9ycyA9IG5ldyBNYXA8U3VwZXJUaWxlVHlwZSwgRWZmZWN0QW5pbWF0b3I+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBub2RlcyAgICAgPSBHcmlkLmZpbGxlZDxjYy5Ob2RlIHwgbnVsbD4oMCwgMCwgbnVsbCk7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVycyA9IEdyaWQuZmlsbGVkPFRpbGVSZW5kZXJlciB8IG51bGw+KDAsIDAsIG51bGwpO1xyXG5cclxuICAgIHByaXZhdGUgY29sb3JTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBwcml2YXRlIHN1cGVyU3ByaXRlcyA9IG5ldyBNYXA8U3VwZXJUaWxlVHlwZSwgY2MuU3ByaXRlRnJhbWU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjZWxsVyAgID0gMDtcclxuICAgIHByaXZhdGUgY2VsbEggICA9IDA7XHJcbiAgICBwcml2YXRlIG9yaWdpblggPSAwO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5ZID0gMDtcclxuXHJcbiAgICBwcml2YXRlIG9uQ2VsbENsaWNrOiAoKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdChcclxuICAgICAgICByb3dzOiBudW1iZXIsXHJcbiAgICAgICAgY29sczogbnVtYmVyLFxyXG4gICAgICAgIGNvbG9yU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSxcclxuICAgICAgICBzdXBlclNwcml0ZXM6IE1hcDxTdXBlclRpbGVUeXBlLCBjYy5TcHJpdGVGcmFtZT4sXHJcbiAgICAgICAgb25DbGljazogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gdm9pZCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sb3JTcHJpdGVzID0gY29sb3JTcHJpdGVzO1xyXG4gICAgICAgIHRoaXMuc3VwZXJTcHJpdGVzID0gc3VwZXJTcHJpdGVzO1xyXG4gICAgICAgIHRoaXMub25DZWxsQ2xpY2sgID0gb25DbGljaztcclxuXHJcbiAgICAgICAgdGhpcy5jZWxsVyA9IEdhbWVDb25maWcuVElMRV9XSURUSCAgKyBHYW1lQ29uZmlnLkNFTExfR0FQO1xyXG4gICAgICAgIHRoaXMuY2VsbEggPSBHYW1lQ29uZmlnLlRJTEVfSEVJR0hUICsgR2FtZUNvbmZpZy5DRUxMX0dBUDtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGhpcy5jZWxsVyAtIEdhbWVDb25maWcuQ0VMTF9HQVA7XHJcbiAgICAgICAgY29uc3QgZ3JpZEggPSByb3dzICogdGhpcy5jZWxsSCAtIEdhbWVDb25maWcuQ0VMTF9HQVA7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5YID0gLWdyaWRXIC8gMiArIEdhbWVDb25maWcuVElMRV9XSURUSCAgLyAyO1xyXG4gICAgICAgIHRoaXMub3JpZ2luWSA9IC1ncmlkSCAvIDIgKyBHYW1lQ29uZmlnLlRJTEVfSEVJR0hUIC8gMjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlcyAgICAgPSBHcmlkLmZpbGxlZChyb3dzLCBjb2xzLCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVycyA9IEdyaWQuZmlsbGVkKHJvd3MsIGNvbHMsIG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFZmZlY3RBbmltYXRvcnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmhhbmRsZVRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRFZmZlY3RBbmltYXRvcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbmltYXRvcnMuc2V0KFN1cGVyVGlsZVR5cGUuUm93Q2xlYXIsICAgIChjLCBwKSA9PiB0aGlzLmFuaW1hdGVSb3dDbGVhcihjLCBwKSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbmltYXRvcnMuc2V0KFN1cGVyVGlsZVR5cGUuQ29sdW1uQ2xlYXIsIChjLCBwKSA9PiB0aGlzLmFuaW1hdGVDb2x1bW5DbGVhcihjLCBwKSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbmltYXRvcnMuc2V0KFN1cGVyVGlsZVR5cGUuUmFkaXVzQm9tYiwgIChjLCBwKSA9PiB0aGlzLmFuaW1hdGVCb21iQmxhc3QoYywgcCkpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0QW5pbWF0b3JzLnNldChTdXBlclRpbGVUeXBlLkZpZWxkQ2xlYXIsICAoYywgcCkgPT4gdGhpcy5hbmltYXRlRmllbGRDbGVhcihjLCBwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTdXBlckVmZmVjdChcclxuICAgICAgICB0eXBlOiBTdXBlclRpbGVUeXBlLFxyXG4gICAgICAgIGNlbnRlcjogR3JpZFBvc2l0aW9uLFxyXG4gICAgICAgIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10sXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBhbmltYXRvciA9IHRoaXMuZWZmZWN0QW5pbWF0b3JzLmdldCh0eXBlKTtcclxuICAgICAgICBpZiAoYW5pbWF0b3IpIGF3YWl0IGFuaW1hdG9yKGNlbnRlciwgcG9zaXRpb25zKTtcclxuICAgICAgICBlbHNlICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZURlc3Ryb3kocG9zaXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VsbFBvcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gY2MudjIoXHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCArIGNvbCAqIHRoaXMuY2VsbFcsXHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSArIHJvdyAqIHRoaXMuY2VsbEgsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQWxsVGlsZXMoZ3JpZDogR3JpZDxDZWxsRGF0YSB8IG51bGw+KTogdm9pZCB7XHJcbiAgICAgICAgZ3JpZC5mb3JFYWNoKChjZWxsLCByLCBjKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjZWxsKSB0aGlzLm1ha2VUaWxlKHIsIGMsIGNlbGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckFsbFRpbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHsgcm93cywgY29scyB9ID0gdGhpcy5ub2RlcztcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpbGxUaWxlKHIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZVN1cGVyVGlsZShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGNlbGw6IENlbGxEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5raWxsVGlsZShyb3csIGNvbCk7XHJcbiAgICAgICAgdGhpcy5tYWtlVGlsZShyb3csIGNvbCwgY2VsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYnVpbGRJbnN0YW50KGdyaWQ6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBbGxUaWxlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQWxsVGlsZXMoZ3JpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVEZXN0cm95KHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnJlbmRlcmVycy5nZXQocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChyKSB0YXNrcy5wdXNoKHIucGxheURlc3Ryb3koR2FtZUNvbmZpZy5ERVNUUk9ZX0RVUkFUSU9OKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHRoaXMua2lsbFRpbGUocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVCb21iQmxhc3QoY2VudGVyOiBHcmlkUG9zaXRpb24sIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB3YXZlRGVsYXkgID0gR2FtZUNvbmZpZy5CT01CX1dBVkVfREVMQVlfUEVSX0RJU1Q7XHJcbiAgICAgICAgY29uc3QgZmxhc2hEdXIgICA9IEdhbWVDb25maWcuQk9NQl9GTEFTSF9EVVJBVElPTjtcclxuICAgICAgICBjb25zdCBzaHJpbmtEdXIgID0gR2FtZUNvbmZpZy5CT01CX1NIUklOS19EVVJBVElPTjtcclxuICAgICAgICBjb25zdCBmbGFzaFNjYWxlID0gR2FtZUNvbmZpZy5CT01CX0ZMQVNIX1NDQUxFO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vZGVzLmdldChwb3Mucm93LCBwb3MuY29sKTtcclxuICAgICAgICAgICAgaWYgKCFuKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgID0gTWF0aC5hYnMocG9zLnJvdyAtIGNlbnRlci5yb3cpICsgTWF0aC5hYnMocG9zLmNvbCAtIGNlbnRlci5jb2wpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IGRpc3QgKiB3YXZlRGVsYXk7XHJcblxyXG4gICAgICAgICAgICB0YXNrcy5wdXNoKG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obilcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGZsYXNoRHVyLCB7IHNjYWxlOiBmbGFzaFNjYWxlIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oc2hyaW5rRHVyLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnYmFja0luJyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB0aGlzLmtpbGxUaWxlKHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlUm93Q2xlYXIoY2VudGVyOiBHcmlkUG9zaXRpb24sIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBjZmcgPSBHYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHsgcm93cywgY29scyB9ID0gdGhpcy5ub2RlcztcclxuXHJcbiAgICAgICAgY29uc3QgYmVhbVkgPSB0aGlzLmNlbGxQb3MoY2VudGVyLnJvdywgMCkueTtcclxuICAgICAgICBjb25zdCBmdWxsVyA9IGNvbHMgKiB0aGlzLmNlbGxXICsgY2ZnLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5tYWtlQmVhbSgwLCBiZWFtWSwgZnVsbFcsIGNmZy5MSU5FX0JFQU1fSEVJR0hULCB0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5ub2Rlcy5nZXQocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICAgICAgICAgIGlmICghbikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ICA9IE1hdGguYWJzKHBvcy5jb2wgLSBjZW50ZXIuY29sKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBkaXN0ICogY2ZnLkxJTkVfU1dFRVBfREVMQVlfUEVSX0NFTEw7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpciAgID0gcG9zLmNvbCA+PSBjZW50ZXIuY29sID8gMSA6IC0xO1xyXG5cclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG4pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhjZmcuTElORV9TVFJFVENIX0RVUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZVg6IDEuNSwgc2NhbGVZOiAwLjU1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oY2ZnLkxJTkVfU0hSSU5LX0RVUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgYW5nbGU6IDIwICogZGlyIH0gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVhc2luZzogJ3NpbmVJbicgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHRoaXMua2lsbFRpbGUocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVDb2x1bW5DbGVhcihjZW50ZXI6IEdyaWRQb3NpdGlvbiwgcG9zaXRpb25zOiBHcmlkUG9zaXRpb25bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IEdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc3QgeyByb3dzLCBjb2xzIH0gPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgICAgICBjb25zdCBiZWFtWCA9IHRoaXMuY2VsbFBvcygwLCBjZW50ZXIuY29sKS54O1xyXG4gICAgICAgIGNvbnN0IGZ1bGxIID0gcm93cyAqIHRoaXMuY2VsbEggKyBjZmcuVElMRV9IRUlHSFQ7XHJcbiAgICAgICAgdGhpcy5tYWtlQmVhbShiZWFtWCwgMCwgY2ZnLkxJTkVfQkVBTV9IRUlHSFQsIGZ1bGxILCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMubm9kZXMuZ2V0KHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgICAgICAgICBpZiAoIW4pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCAgPSBNYXRoLmFicyhwb3Mucm93IC0gY2VudGVyLnJvdyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gZGlzdCAqIGNmZy5MSU5FX1NXRUVQX0RFTEFZX1BFUl9DRUxMO1xyXG4gICAgICAgICAgICBjb25zdCBkaXIgICA9IHBvcy5yb3cgPj0gY2VudGVyLnJvdyA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oY2ZnLkxJTkVfU1RSRVRDSF9EVVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGVYOiAwLjU1LCBzY2FsZVk6IDEuNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGNmZy5MSU5FX1NIUklOS19EVVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGFuZ2xlOiAyMCAqIGRpciB9IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlYXNpbmc6ICdzaW5lSW4nIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gcmVzb2x2ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB0aGlzLmtpbGxUaWxlKHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlRmllbGRDbGVhcihjZW50ZXI6IEdyaWRQb3NpdGlvbiwgcG9zaXRpb25zOiBHcmlkUG9zaXRpb25bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IEdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMubm9kZXMuZ2V0KHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgICAgICAgICBpZiAoIW4pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCAgPSBNYXRoLmFicyhwb3Mucm93IC0gY2VudGVyLnJvdykgKyBNYXRoLmFicyhwb3MuY29sIC0gY2VudGVyLmNvbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gZGlzdCAqIGNmZy5GSUVMRF9DTEVBUl9ERUxBWV9QRVJfRElTVDtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oY2ZnLkZJRUxEX0NMRUFSX0ZMQVNIX0RVUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZTogMS4zNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGNmZy5GSUVMRF9DTEVBUl9TSFJJTktfRFVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAnYmFja0luJyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykgdGhpcy5raWxsVGlsZShwb3Mucm93LCBwb3MuY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VCZWFtKFxyXG4gICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyLFxyXG4gICAgICAgIHc6IG51bWJlciwgaDogbnVtYmVyLFxyXG4gICAgICAgIGhvcml6b250YWw6IGJvb2xlYW4sXHJcbiAgICApOiBjYy5Ob2RlIHtcclxuICAgICAgICBjb25zdCBjZmcgPSBHYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnN0IGJlYW0gPSBuZXcgY2MuTm9kZSgnQmVhbScpO1xyXG4gICAgICAgIGJlYW0ucGFyZW50ICA9IHRoaXMubm9kZTtcclxuICAgICAgICBiZWFtLnpJbmRleCAgPSA5OTk4O1xyXG4gICAgICAgIGJlYW0uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgYmVhbS5vcGFjaXR5ID0gMjIwO1xyXG5cclxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkgeyBiZWFtLnNjYWxlWCA9IDA7IGJlYW0uc2NhbGVZID0gMTsgfVxyXG4gICAgICAgIGVsc2UgICAgICAgICAgICB7IGJlYW0uc2NhbGVYID0gMTsgYmVhbS5zY2FsZVkgPSAwOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdmeCA9IGJlYW0uYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBnZnguZmlsbENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDE2MCwgMjIwKTtcclxuICAgICAgICBnZngucmVjdCgtdyAvIDIsIC1oIC8gMiwgdywgaCk7XHJcbiAgICAgICAgZ2Z4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwYW5kUHJvcCA9IGhvcml6b250YWwgPyB7IHNjYWxlWDogMSB9IDogeyBzY2FsZVk6IDEgfTtcclxuICAgICAgICBjb25zdCBmYWRlUHJvcCAgID0gaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICA/IHsgb3BhY2l0eTogMCwgc2NhbGVZOiA0IH1cclxuICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHNjYWxlWDogNCB9O1xyXG5cclxuICAgICAgICBjYy50d2VlbihiZWFtKVxyXG4gICAgICAgICAgICAudG8oY2ZnLkxJTkVfQkVBTV9FWFBBTkRfRFVSLCBleHBhbmRQcm9wIGFzIGFueSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oY2ZnLkxJTkVfQkVBTV9GQURFX0RVUiwgICBmYWRlUHJvcCAgYXMgYW55LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IGJlYW0uZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJlYW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVHcmF2aXR5KG1vdmVzOiBHcmF2aXR5TW92ZVtdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtb3Zlcykge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5ub2Rlcy5nZXQobS5mcm9tLnJvdywgbS5mcm9tLmNvbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnJlbmRlcmVycy5nZXQobS5mcm9tLnJvdywgbS5mcm9tLmNvbCk7XHJcbiAgICAgICAgICAgIGlmICghbiB8fCAhcikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnNldChtLnRvLnJvdywgbS50by5jb2wsIG4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5zZXQobS50by5yb3csIG0udG8uY29sLCByKTtcclxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobS5mcm9tLnJvdywgbS5mcm9tLmNvbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnNldChtLmZyb20ucm93LCBtLmZyb20uY29sLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2VsbFBvcyhtLnRvLnJvdywgbS50by5jb2wpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ICAgPSBtLmZyb20ucm93IC0gbS50by5yb3c7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2goci5wbGF5RmFsbCh0YXJnZXQueSwgZGlzdCAqIEdhbWVDb25maWcuRkFMTF9EVVJBVElPTl9QRVJfQ0VMTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTcGF3bihzcGF3bmVkOiBTcGF3bmVkVGlsZVtdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzcGF3bmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2VsbFBvcyhzLnBvc2l0aW9uLnJvdywgcy5wb3NpdGlvbi5jb2wpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFkgPSB0YXJnZXQueSArIHMuZmFsbERpc3RhbmNlICogdGhpcy5jZWxsSDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLm1ha2VUaWxlKHMucG9zaXRpb24ucm93LCBzLnBvc2l0aW9uLmNvbCwgcy5jZWxsKTtcclxuICAgICAgICAgICAgaWYgKCFuKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbi55ID0gc3RhcnRZOyBuLnNjYWxlID0gMTsgbi5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucmVuZGVyZXJzLmdldChzLnBvc2l0aW9uLnJvdywgcy5wb3NpdGlvbi5jb2wpO1xyXG4gICAgICAgICAgICBpZiAocikgdGFza3MucHVzaChyLnBsYXlGYWxsKHRhcmdldC55LCBzLmZhbGxEaXN0YW5jZSAqIEdhbWVDb25maWcuRkFMTF9EVVJBVElPTl9QRVJfQ0VMTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTaW5nbGVTcGF3bihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5yZW5kZXJlcnMuZ2V0KHJvdywgY29sKTtcclxuICAgICAgICBpZiAocikgYXdhaXQgci5wbGF5U3Bhd24oR2FtZUNvbmZpZy5TUEFXTl9EVVJBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTd2FwKGE6IEdyaWRQb3NpdGlvbiwgYjogR3JpZFBvc2l0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcmEgPSB0aGlzLnJlbmRlcmVycy5nZXQoYS5yb3csIGEuY29sKTtcclxuICAgICAgICBjb25zdCByYiA9IHRoaXMucmVuZGVyZXJzLmdldChiLnJvdywgYi5jb2wpO1xyXG4gICAgICAgIGlmICghcmEgfHwgIXJiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBhID0gdGhpcy5jZWxsUG9zKGIucm93LCBiLmNvbCk7XHJcbiAgICAgICAgY29uc3QgcGIgPSB0aGlzLmNlbGxQb3MoYS5yb3csIGEuY29sKTtcclxuICAgICAgICB0aGlzLnN3YXBSZWZzKGEsIGIpO1xyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHJhLnBsYXlNb3ZlVG8ocGEsIEdhbWVDb25maWcuU1dBUF9EVVJBVElPTiksXHJcbiAgICAgICAgICAgIHJiLnBsYXlNb3ZlVG8ocGIsIEdhbWVDb25maWcuU1dBUF9EVVJBVElPTiksXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTaHVmZmxlKGdyaWQ6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZUFsbFNjYWxlKDAsIEdhbWVDb25maWcuU0hVRkZMRV9IQUxGX0RVUkFUSU9OKTtcclxuICAgICAgICB0aGlzLmNsZWFyQWxsVGlsZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFsbFRpbGVzKGdyaWQpO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE5vZGUobiA9PiB7IG4uc2NhbGUgPSAwOyB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVBbGxTY2FsZSgxLCBHYW1lQ29uZmlnLlNIVUZGTEVfSEFMRl9EVVJBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVJbml0aWFsQXBwZWFyYW5jZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBjb2xEZWxheSA9IEdhbWVDb25maWcuQ0FTQ0FERV9DT0xfREVMQVk7XHJcbiAgICAgICAgY29uc3Qgcm93RGVsYXkgPSBHYW1lQ29uZmlnLkNBU0NBREVfUk9XX0RFTEFZO1xyXG4gICAgICAgIGNvbnN0IGZhbGxEdXIgID0gR2FtZUNvbmZpZy5DQVNDQURFX0ZBTExfRFVSQVRJT047XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSAgPSBHYW1lQ29uZmlnLkNBU0NBREVfU1RBUlRfT0ZGU0VUX1k7XHJcbiAgICAgICAgY29uc3QgeyByb3dzLCBjb2xzIH0gPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuKSByZXR1cm47XHJcbiAgICAgICAgICAgIG4ueSAgICAgICs9IG9mZnNldFk7XHJcbiAgICAgICAgICAgIG4uc2NhbGUgICA9IDAuNTtcclxuICAgICAgICAgICAgbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHM7IGMrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gcm93cyAtIDE7IHIgPj0gMDsgci0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5ub2Rlcy5nZXQociwgYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW4pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2VsbFBvcyhyLCBjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGF5ICA9IGMgKiBjb2xEZWxheSArIChyb3dzIC0gMSAtIHIpICogcm93RGVsYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgbi5vcGFjaXR5ID0gMjU1OyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oZmFsbER1ciwgeyB5OiB0YXJnZXQueSwgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdib3VuY2VPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYW5pbWF0ZURpc21pc3NBbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlQWxsU2NhbGUoMCwgR2FtZUNvbmZpZy5ESVNNSVNTX0RVUkFUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0Zsb2F0aW5nU2NvcmUoXHJcbiAgICAgICAgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBhbW91bnQ6IG51bWJlciwgZm9udDogY2MuRm9udCB8IG51bGwsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmNlbGxQb3Mocm93LCBjb2wpO1xyXG5cclxuICAgICAgICBjb25zdCBuID0gbmV3IGNjLk5vZGUoJ1Njb3JlUG9wdXAnKTtcclxuICAgICAgICBuLnBhcmVudCAgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbi56SW5kZXggID0gOTk5OTtcclxuICAgICAgICBuLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSArIDIwKTtcclxuICAgICAgICBuLnNjYWxlICAgPSAwLjQ7XHJcbiAgICAgICAgbi5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbCAgICAgICAgPSBuLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGFiZWwuc3RyaW5nICAgICAgID0gYCske2Ftb3VudH1gO1xyXG4gICAgICAgIGxhYmVsLmZvbnRTaXplICAgICA9IEdhbWVDb25maWcuU0NPUkVfUE9QVVBfRk9OVF9TSVpFO1xyXG4gICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgICA9IEdhbWVDb25maWcuU0NPUkVfUE9QVVBfRk9OVF9TSVpFICsgNDtcclxuICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIGxhYmVsLnZlcnRpY2FsQWxpZ24gICA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIGlmIChmb250KSB7XHJcbiAgICAgICAgICAgIGxhYmVsLmZvbnQgICAgICAgICAgPSBmb250O1xyXG4gICAgICAgICAgICBsYWJlbC51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNDUsIDYwKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3Jvd0R1ciAgPSBHYW1lQ29uZmlnLlNDT1JFX1BPUFVQX0dST1dfRFVSQVRJT047XHJcbiAgICAgICAgY29uc3QgZmxvYXREdXIgPSBHYW1lQ29uZmlnLlNDT1JFX1BPUFVQX0ZMT0FUX0RVUkFUSU9OO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0WSAgID0gcG9zLnkgKyAyMCArIEdhbWVDb25maWcuU0NPUkVfUE9QVVBfRkxPQVRfWTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4obilcclxuICAgICAgICAgICAgLnRvKGdyb3dEdXIsIHsgc2NhbGU6IDEuMTUgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oZmxvYXREdXIsIHsgeTogZmxvYXRZLCBvcGFjaXR5OiAwLCBzY2FsZTogMC44NSB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IG4uZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGlsZUhpZ2hsaWdodChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIG9uOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgciA9IHRoaXMucmVuZGVyZXJzLmdldChyb3csIGNvbCk7XHJcbiAgICAgICAgaWYgKHIpIHIuc2V0SGlnaGxpZ2h0KG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJBbGxIaWdobGlnaHRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyKSByLnNldEhpZ2hsaWdodChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUb3VjaChlOiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uQ2VsbENsaWNrKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zdCB7IHJvd3MsIGNvbHMgfSA9IHRoaXMubm9kZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGgucm91bmQoKGxvY2FsLnggLSB0aGlzLm9yaWdpblgpIC8gdGhpcy5jZWxsVyk7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5yb3VuZCgobG9jYWwueSAtIHRoaXMub3JpZ2luWSkgLyB0aGlzLmNlbGxIKTtcclxuICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gcm93cyB8fCBjb2wgPCAwIHx8IGNvbCA+PSBjb2xzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNlbGxQb3Mocm93LCBjb2wpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhsb2NhbC54IC0gYy54KSA+IEdhbWVDb25maWcuVElMRV9XSURUSCAgLyAyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGxvY2FsLnkgLSBjLnkpID4gR2FtZUNvbmZpZy5USUxFX0hFSUdIVCAvIDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNlbGxDbGljayhyb3csIGNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlVGlsZShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGNlbGw6IENlbGxEYXRhKTogY2MuTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHNmID0gdGhpcy5yZXNvbHZlU3ByaXRlKGNlbGwpO1xyXG4gICAgICAgIGlmICghc2YpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBuID0gbmV3IGNjLk5vZGUoYFRpbGVfJHtyb3d9XyR7Y29sfWApO1xyXG4gICAgICAgIG4ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmNlbGxQb3Mocm93LCBjb2wpO1xyXG4gICAgICAgIG4uc2V0UG9zaXRpb24ocC54LCBwLnkpO1xyXG5cclxuICAgICAgICBjb25zdCByID0gbi5hZGRDb21wb25lbnQoVGlsZVJlbmRlcmVyKTtcclxuICAgICAgICByLmluaXQoc2YpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzLnNldChyb3csIGNvbCwgbik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcnMuc2V0KHJvdywgY29sLCByKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtpbGxUaWxlKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vZGVzLmdldChyb3csIGNvbCk7XHJcbiAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KHJvdywgY29sLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMuc2V0KHJvdywgY29sLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzd2FwUmVmcyhhOiBHcmlkUG9zaXRpb24sIGI6IEdyaWRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZXMuc3dhcChhLnJvdywgYS5jb2wsIGIucm93LCBiLmNvbCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcnMuc3dhcChhLnJvdywgYS5jb2wsIGIucm93LCBiLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlU3ByaXRlKGNlbGw6IENlbGxEYXRhKTogY2MuU3ByaXRlRnJhbWUgfCBudWxsIHtcclxuICAgICAgICBpZiAoY2VsbC5zdXBlclR5cGUgIT09IFN1cGVyVGlsZVR5cGUuTm9uZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VwZXJTcHJpdGVzLmdldChjZWxsLnN1cGVyVHlwZSkgfHwgbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclNwcml0ZXNbY2VsbC5jb2xvcl0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGFuaW1hdGVBbGxTY2FsZSh0YXJnZXQ6IG51bWJlciwgZHVyOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoTm9kZShuID0+IHtcclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgUHJvbWlzZTx2b2lkPihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obikudG8oZHVyLCB7IHNjYWxlOiB0YXJnZXQgfSkuY2FsbCgoKSA9PiByZXMoKSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvckVhY2hOb2RlKGZuOiAobjogY2MuTm9kZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChuID0+IHsgaWYgKG4pIGZuKG4pOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmhhbmRsZVRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BlastGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57af4WUvVJNr71Lz2OSL1En', 'BlastGame');
// Scripts/BlastGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./config/GameConfig");
var FieldModel_1 = require("./core/FieldModel");
var GameSession_1 = require("./core/GameSession");
var Types_1 = require("./core/Types");
var SuperTileStrategy_1 = require("./strategies/SuperTileStrategy");
var InputState_1 = require("./input/InputState");
var FieldRenderer_1 = require("./rendering/FieldRenderer");
var HUDPresenter_1 = require("./rendering/HUDPresenter");
var ResultPopup_1 = require("./rendering/ResultPopup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlastGame = /** @class */ (function (_super) {
    __extends(BlastGame, _super);
    function BlastGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tileSprites = [];
        _this.superRowSprite = null;
        _this.superColSprite = null;
        _this.superBombSprite = null;
        _this.superFieldSprite = null;
        _this.gameFont = null;
        _this.bombButton = null;
        _this.teleportButton = null;
        _this.field = null;
        _this.session = null;
        _this.renderer = null;
        _this.hud = null;
        _this.popup = null;
        _this.inputState = new InputState_1.LockedState();
        return _this;
    }
    // Click Events handlers for cc.Button (bound via inspector)
    BlastGame.prototype.onBombClicked = function (_event, _data) {
        this.inputState.onBoosterBombClick(this);
    };
    BlastGame.prototype.onTeleportClicked = function (_event, _data) {
        this.inputState.onBoosterTeleportClick(this);
    };
    BlastGame.prototype.onLoad = function () {
        this.initSystems();
    };
    BlastGame.prototype.start = function () {
        this.beginGame();
    };
    BlastGame.prototype.update = function (dt) {
        this.hud.update(dt);
    };
    BlastGame.prototype.initSystems = function () {
        this.field = new FieldModel_1.FieldModel();
        this.session = new GameSession_1.GameSession();
        this.wireRenderer();
        this.wireHUD();
        this.popup = new ResultPopup_1.ResultPopup(this.node, this.gameFont);
        this.ensureValidBoard();
        this.renderer.createAllTiles(this.field.getGrid());
        this.hud.resetScore(this.session.getTargetScore());
        this.refreshHUD();
    };
    BlastGame.prototype.beginGame = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderer.animateInitialAppearance()];
                    case 1:
                        _a.sent();
                        this.transitionTo(new InputState_1.IdleState());
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.transitionTo = function (state) {
        this.inputState = state;
        this.hud.setActiveBooster(state.activeBooster);
    };
    BlastGame.prototype.getCellAt = function (row, col) {
        return this.field.getCell(row, col);
    };
    BlastGame.prototype.findGroup = function (row, col) {
        return this.field.findGroup(row, col);
    };
    BlastGame.prototype.getBoosterCount = function (type) {
        return this.session.getBoosterCount(type);
    };
    BlastGame.prototype.highlightTile = function (row, col, on) {
        this.renderer.setTileHighlight(row, col, on);
    };
    BlastGame.prototype.clearHighlights = function () {
        this.renderer.clearAllHighlights();
    };
    BlastGame.prototype.executeGroupMatch = function (row, col) {
        this.transitionTo(new InputState_1.LockedState());
        this.processGroupMatch(row, col);
    };
    BlastGame.prototype.executeSuperTileActivation = function (row, col, type) {
        this.transitionTo(new InputState_1.LockedState());
        this.processSuperTile(row, col, type);
    };
    BlastGame.prototype.executeBombBooster = function (row, col) {
        if (!this.session.consumeBooster(Types_1.BoosterType.Bomb))
            return;
        this.transitionTo(new InputState_1.LockedState());
        this.processBombBooster(row, col);
    };
    BlastGame.prototype.executeTeleportSwap = function (a, b) {
        if (!this.session.consumeBooster(Types_1.BoosterType.Teleport)) {
            this.transitionTo(new InputState_1.IdleState());
            return;
        }
        this.transitionTo(new InputState_1.LockedState());
        this.processTeleport(a, b);
    };
    BlastGame.prototype.processGroupMatch = function (row, col) {
        return __awaiter(this, void 0, Promise, function () {
            var cell, group, color, superType, points;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cell = this.field.getCell(row, col);
                        group = this.field.findGroup(row, col);
                        color = cell.color;
                        superType = SuperTileStrategy_1.SuperTileResolver.determineType(group.length);
                        points = this.session.calcGroupScore(group.length);
                        this.field.removeTiles(group);
                        return [4 /*yield*/, this.renderer.animateDestroy(group)];
                    case 1:
                        _a.sent();
                        this.renderer.showFloatingScore(row, col, points, this.gameFont);
                        if (!(superType !== Types_1.SuperTileType.None)) return [3 /*break*/, 3];
                        this.field.placeSuperTile(row, col, color, superType);
                        this.renderer.placeSuperTile(row, col, { color: color, superType: superType });
                        return [4 /*yield*/, this.renderer.animateSingleSpawn(row, col)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.settleField()];
                    case 4:
                        _a.sent();
                        this.session.addScore(points);
                        this.session.consumeMove();
                        this.refreshHUD();
                        return [4 /*yield*/, this.endOfTurn()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.processSuperTile = function (row, col, type) {
        return __awaiter(this, void 0, Promise, function () {
            var seeds, affected, points;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seeds = SuperTileStrategy_1.SuperTileResolver.resolve(type, this.field, row, col);
                        seeds.push({ row: row, col: col });
                        affected = SuperTileStrategy_1.SuperTileResolver.collectChained(this.field, seeds);
                        points = this.session.calcEffectScore(affected.length);
                        this.field.removeTiles(affected);
                        return [4 /*yield*/, this.renderer.animateSuperEffect(type, { row: row, col: col }, affected)];
                    case 1:
                        _a.sent();
                        this.renderer.showFloatingScore(row, col, points, this.gameFont);
                        return [4 /*yield*/, this.settleField()];
                    case 2:
                        _a.sent();
                        this.session.addScore(points);
                        this.session.consumeMove();
                        this.refreshHUD();
                        return [4 /*yield*/, this.endOfTurn()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.processBombBooster = function (row, col) {
        return __awaiter(this, void 0, Promise, function () {
            var seeds, affected, points;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seeds = this.field.positionsInRadius(row, col, GameConfig_1.GameConfig.BOMB_RADIUS);
                        affected = SuperTileStrategy_1.SuperTileResolver.collectChained(this.field, seeds);
                        points = this.session.calcEffectScore(affected.length);
                        this.field.removeTiles(affected);
                        return [4 /*yield*/, this.renderer.animateBombBlast({ row: row, col: col }, affected)];
                    case 1:
                        _a.sent();
                        this.renderer.showFloatingScore(row, col, points, this.gameFont);
                        return [4 /*yield*/, this.settleField()];
                    case 2:
                        _a.sent();
                        this.session.addScore(points);
                        this.refreshHUD();
                        return [4 /*yield*/, this.endOfTurn()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.processTeleport = function (a, b) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.field.swapTiles(a, b);
                        return [4 /*yield*/, this.renderer.animateSwap(a, b)];
                    case 1:
                        _a.sent();
                        this.refreshHUD();
                        this.transitionTo(new InputState_1.IdleState());
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.settleField = function () {
        return __awaiter(this, void 0, Promise, function () {
            var grav, spawned;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        grav = this.field.applyGravity();
                        return [4 /*yield*/, this.renderer.animateGravity(grav)];
                    case 1:
                        _a.sent();
                        spawned = this.field.fillEmpty();
                        return [4 /*yield*/, this.renderer.animateSpawn(spawned)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.endOfTurn = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.session.checkWin()) {
                            this.showResult(true);
                            return [2 /*return*/];
                        }
                        if (this.session.checkLose()) {
                            this.showResult(false);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.autoShuffle()];
                    case 1:
                        _a.sent();
                        if (!this.session.isGameOver()) {
                            this.transitionTo(new InputState_1.IdleState());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.autoShuffle = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.field.hasValidMoves()) return [3 /*break*/, 2];
                        if (!this.session.consumeShuffle()) {
                            this.session.forceLose();
                            this.showResult(false);
                            return [2 /*return*/];
                        }
                        this.field.shuffle();
                        return [4 /*yield*/, this.renderer.animateShuffle(this.field.getGrid())];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BlastGame.prototype.ensureValidBoard = function () {
        while (!this.field.hasValidMoves())
            this.field.shuffle();
    };
    BlastGame.prototype.refreshHUD = function () {
        this.hud.animateScoreTo(this.session.getScore());
        this.hud.setMoves(this.session.getMovesRemaining());
        this.hud.setBombCount(this.session.getBoosterCount(Types_1.BoosterType.Bomb));
        this.hud.setTeleportCount(this.session.getBoosterCount(Types_1.BoosterType.Teleport));
    };
    BlastGame.prototype.showResult = function (isWin) {
        var _this = this;
        this.transitionTo(new InputState_1.LockedState());
        this.popup.show(isWin, this.session.getScore(), this.session.getTargetScore(), function () { return _this.restart(); });
    };
    BlastGame.prototype.wireRenderer = function () {
        var _this = this;
        var panel = cc.find('GamePanel', this.node);
        this.renderer = panel.addComponent(FieldRenderer_1.default);
        var superMap = new Map();
        if (this.superRowSprite)
            superMap.set(Types_1.SuperTileType.RowClear, this.superRowSprite);
        if (this.superColSprite)
            superMap.set(Types_1.SuperTileType.ColumnClear, this.superColSprite);
        if (this.superBombSprite)
            superMap.set(Types_1.SuperTileType.RadiusBomb, this.superBombSprite);
        if (this.superFieldSprite)
            superMap.set(Types_1.SuperTileType.FieldClear, this.superFieldSprite);
        this.renderer.init(GameConfig_1.GameConfig.GRID_ROWS, GameConfig_1.GameConfig.GRID_COLS, this.tileSprites, superMap, function (r, c) { return _this.inputState.onCellClick(_this, r, c); });
    };
    BlastGame.prototype.wireHUD = function () {
        var _this = this;
        var label = function (path) {
            var n = cc.find(path, _this.node);
            return n ? n.getComponent(cc.Label) : null;
        };
        var scoreLabel = label('ScorePanel/ScoreTxt');
        var movesLabel = label('ScorePanel/MovesPanel/Moves');
        var bombLabel = label('BoosterBombPanel/TeleportTxt');
        var teleLabel = label('BoosterTeleportPanel/TeleportTxt');
        if (!this.gameFont) {
            for (var _i = 0, _a = [scoreLabel, movesLabel, bombLabel, teleLabel]; _i < _a.length; _i++) {
                var l = _a[_i];
                if (l && l.font) {
                    this.gameFont = l.font;
                    break;
                }
            }
        }
        this.hud = new HUDPresenter_1.HUDPresenter(scoreLabel, movesLabel, bombLabel, teleLabel, this.gameFont || undefined);
        var bombPanel = cc.find('BoosterBombPanel', this.node);
        var telePanel = cc.find('BoosterTeleportPanel', this.node);
        this.hud.initBoosterPanels(bombPanel, telePanel);
        // Button Click Events are used from the scene; manual touch wiring is disabled
    };
    BlastGame.prototype.wireBoosterTouch = function (panel, handler) {
        if (!panel)
            return;
        panel.on(cc.Node.EventType.TOUCH_START, function (e) { return e.stopPropagation(); }, this);
        panel.on(cc.Node.EventType.TOUCH_END, function (e) { e.stopPropagation(); handler(); }, this);
    };
    BlastGame.prototype.restart = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.transitionTo(new InputState_1.LockedState());
                        return [4 /*yield*/, this.renderer.animateDismissAll()];
                    case 1:
                        _a.sent();
                        this.renderer.clearAllTiles();
                        this.field = new FieldModel_1.FieldModel();
                        this.session = new GameSession_1.GameSession();
                        this.ensureValidBoard();
                        this.hud.resetScore(this.session.getTargetScore());
                        this.renderer.createAllTiles(this.field.getGrid());
                        this.refreshHUD();
                        return [4 /*yield*/, this.renderer.animateInitialAppearance()];
                    case 2:
                        _a.sent();
                        this.transitionTo(new InputState_1.IdleState());
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], BlastGame.prototype, "tileSprites", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BlastGame.prototype, "superRowSprite", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BlastGame.prototype, "superColSprite", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BlastGame.prototype, "superBombSprite", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BlastGame.prototype, "superFieldSprite", void 0);
    __decorate([
        property({ type: cc.Font })
    ], BlastGame.prototype, "gameFont", void 0);
    __decorate([
        property(cc.Button)
    ], BlastGame.prototype, "bombButton", void 0);
    __decorate([
        property(cc.Button)
    ], BlastGame.prototype, "teleportButton", void 0);
    BlastGame = __decorate([
        ccclass('BlastGame')
    ], BlastGame);
    return BlastGame;
}(cc.Component));
exports.default = BlastGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmxhc3RHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwRDtBQUMxRCxnREFBd0Q7QUFDeEQsa0RBQXlEO0FBQ3pELHNDQUVtRDtBQUNuRCxvRUFBcUU7QUFDckUsaURBR3lEO0FBQ3pELDJEQUFnRTtBQUNoRSx5REFBK0Q7QUFDL0QsdURBQThEO0FBRXhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdVRDO1FBcFRHLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUduQyxvQkFBYyxHQUFtQixJQUFLLENBQUM7UUFHdkMsb0JBQWMsR0FBbUIsSUFBSyxDQUFDO1FBR3ZDLHFCQUFlLEdBQW1CLElBQUssQ0FBQztRQUd4QyxzQkFBZ0IsR0FBbUIsSUFBSyxDQUFDO1FBR3pDLGNBQVEsR0FBWSxJQUFLLENBQUM7UUFHMUIsZ0JBQVUsR0FBYyxJQUFLLENBQUM7UUFHOUIsb0JBQWMsR0FBYyxJQUFLLENBQUM7UUFFMUIsV0FBSyxHQUFxQixJQUFLLENBQUM7UUFDaEMsYUFBTyxHQUFtQixJQUFLLENBQUM7UUFDaEMsY0FBUSxHQUFrQixJQUFLLENBQUM7UUFDaEMsU0FBRyxHQUF1QixJQUFLLENBQUM7UUFDaEMsV0FBSyxHQUFxQixJQUFLLENBQUM7UUFFaEMsZ0JBQVUsR0FBZ0IsSUFBSSx3QkFBVyxFQUFFLENBQUM7O0lBdVJ4RCxDQUFDO0lBclJHLDREQUE0RDtJQUNyRCxpQ0FBYSxHQUFwQixVQUFxQixNQUFpQixFQUFFLEtBQWM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lB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QyxJQUFJLEVBQUUsQ0FBQzsrQ0FDRjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2M7SUF4QmpCLFNBQVM7UUFEN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQztPQUNBLFNBQVMsQ0F1VDdCO0lBQUQsZ0JBQUM7Q0F2VEQsQUF1VEMsQ0F2VHNDLEVBQUUsQ0FBQyxTQUFTLEdBdVRsRDtrQkF2VG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uZmlnIH0gICAgICAgICAgZnJvbSAnLi9jb25maWcvR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEZpZWxkTW9kZWwgfSAgICAgICAgICBmcm9tICcuL2NvcmUvRmllbGRNb2RlbCc7XHJcbmltcG9ydCB7IEdhbWVTZXNzaW9uIH0gICAgICAgICBmcm9tICcuL2NvcmUvR2FtZVNlc3Npb24nO1xyXG5pbXBvcnQge1xyXG4gICAgQm9vc3RlclR5cGUsIENlbGxEYXRhLCBHcmlkUG9zaXRpb24sIFN1cGVyVGlsZVR5cGUsXHJcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvcmUvVHlwZXMnO1xyXG5pbXBvcnQgeyBTdXBlclRpbGVSZXNvbHZlciB9ICAgZnJvbSAnLi9zdHJhdGVnaWVzL1N1cGVyVGlsZVN0cmF0ZWd5JztcclxuaW1wb3J0IHtcclxuICAgIElJbnB1dENvbnRleHQsIElJbnB1dFN0YXRlLFxyXG4gICAgSWRsZVN0YXRlLCBMb2NrZWRTdGF0ZSxcclxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vaW5wdXQvSW5wdXRTdGF0ZSc7XHJcbmltcG9ydCBGaWVsZFJlbmRlcmVyICAgICAgICAgICBmcm9tICcuL3JlbmRlcmluZy9GaWVsZFJlbmRlcmVyJztcclxuaW1wb3J0IHsgSFVEUHJlc2VudGVyIH0gICAgICAgIGZyb20gJy4vcmVuZGVyaW5nL0hVRFByZXNlbnRlcic7XHJcbmltcG9ydCB7IFJlc3VsdFBvcHVwIH0gICAgICAgICBmcm9tICcuL3JlbmRlcmluZy9SZXN1bHRQb3B1cCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0JsYXN0R2FtZScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYXN0R2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCBpbXBsZW1lbnRzIElJbnB1dENvbnRleHQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0gfSlcclxuICAgIHRpbGVTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcclxuICAgIHN1cGVyUm93U3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGwhO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXHJcbiAgICBzdXBlckNvbFNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsITtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9KVxyXG4gICAgc3VwZXJCb21iU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGwhO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXHJcbiAgICBzdXBlckZpZWxkU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGwhO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZvbnQgfSlcclxuICAgIGdhbWVGb250OiBjYy5Gb250ID0gbnVsbCE7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJvbWJCdXR0b246IGNjLkJ1dHRvbiA9IG51bGwhO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICB0ZWxlcG9ydEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbCE7XHJcblxyXG4gICAgcHJpdmF0ZSBmaWVsZDogICAgRmllbGRNb2RlbCAgICA9IG51bGwhO1xyXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiAgR2FtZVNlc3Npb24gICA9IG51bGwhO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogRmllbGRSZW5kZXJlciA9IG51bGwhO1xyXG4gICAgcHJpdmF0ZSBodWQ6ICAgICAgSFVEUHJlc2VudGVyICA9IG51bGwhO1xyXG4gICAgcHJpdmF0ZSBwb3B1cDogICAgUmVzdWx0UG9wdXAgICA9IG51bGwhO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdGF0ZTogSUlucHV0U3RhdGUgPSBuZXcgTG9ja2VkU3RhdGUoKTtcclxuXHJcbiAgICAvLyBDbGljayBFdmVudHMgaGFuZGxlcnMgZm9yIGNjLkJ1dHRvbiAoYm91bmQgdmlhIGluc3BlY3RvcilcclxuICAgIHB1YmxpYyBvbkJvbWJDbGlja2VkKF9ldmVudD86IGNjLkV2ZW50LCBfZGF0YT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdGF0ZS5vbkJvb3N0ZXJCb21iQ2xpY2sodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGVsZXBvcnRDbGlja2VkKF9ldmVudD86IGNjLkV2ZW50LCBfZGF0YT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdGF0ZS5vbkJvb3N0ZXJUZWxlcG9ydENsaWNrKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0U3lzdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJlZ2luR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHVkLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U3lzdGVtcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpZWxkICAgPSBuZXcgRmllbGRNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IG5ldyBHYW1lU2Vzc2lvbigpO1xyXG5cclxuICAgICAgICB0aGlzLndpcmVSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMud2lyZUhVRCgpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUmVzdWx0UG9wdXAodGhpcy5ub2RlLCB0aGlzLmdhbWVGb250KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnN1cmVWYWxpZEJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jcmVhdGVBbGxUaWxlcyh0aGlzLmZpZWxkLmdldEdyaWQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHVkLnJlc2V0U2NvcmUodGhpcy5zZXNzaW9uLmdldFRhcmdldFNjb3JlKCkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEhVRCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYmVnaW5HYW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyZXIuYW5pbWF0ZUluaXRpYWxBcHBlYXJhbmNlKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3IElkbGVTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNpdGlvblRvKHN0YXRlOiBJSW5wdXRTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuaHVkLnNldEFjdGl2ZUJvb3N0ZXIoc3RhdGUuYWN0aXZlQm9vc3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGxBdChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBDZWxsRGF0YSB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmdldENlbGwocm93LCBjb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kR3JvdXAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogR3JpZFBvc2l0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmZpbmRHcm91cChyb3csIGNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJvb3N0ZXJDb3VudCh0eXBlOiBCb29zdGVyVHlwZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvbi5nZXRCb29zdGVyQ291bnQodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZ2hsaWdodFRpbGUocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBvbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0VGlsZUhpZ2hsaWdodChyb3csIGNvbCwgb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckhpZ2hsaWdodHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhckFsbEhpZ2hsaWdodHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUdyb3VwTWF0Y2gocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3IExvY2tlZFN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0dyb3VwTWF0Y2gocm93LCBjb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlU3VwZXJUaWxlQWN0aXZhdGlvbihyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHR5cGU6IFN1cGVyVGlsZVR5cGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhuZXcgTG9ja2VkU3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU3VwZXJUaWxlKHJvdywgY29sLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJvbWJCb29zdGVyKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXNzaW9uLmNvbnN1bWVCb29zdGVyKEJvb3N0ZXJUeXBlLkJvbWIpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3IExvY2tlZFN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0JvbWJCb29zdGVyKHJvdywgY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZVRlbGVwb3J0U3dhcChhOiBHcmlkUG9zaXRpb24sIGI6IEdyaWRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXNzaW9uLmNvbnN1bWVCb29zdGVyKEJvb3N0ZXJUeXBlLlRlbGVwb3J0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhuZXcgSWRsZVN0YXRlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRvKG5ldyBMb2NrZWRTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NUZWxlcG9ydChhLCBiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHByb2Nlc3NHcm91cE1hdGNoKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgID0gdGhpcy5maWVsZC5nZXRDZWxsKHJvdywgY29sKSE7XHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmZpZWxkLmZpbmRHcm91cChyb3csIGNvbCk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBjZWxsLmNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IFN1cGVyVGlsZVJlc29sdmVyLmRldGVybWluZVR5cGUoZ3JvdXAubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBwb2ludHMgPSB0aGlzLnNlc3Npb24uY2FsY0dyb3VwU2NvcmUoZ3JvdXAubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZC5yZW1vdmVUaWxlcyhncm91cCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlRGVzdHJveShncm91cCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaG93RmxvYXRpbmdTY29yZShyb3csIGNvbCwgcG9pbnRzLCB0aGlzLmdhbWVGb250KTtcclxuXHJcbiAgICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gU3VwZXJUaWxlVHlwZS5Ob25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGQucGxhY2VTdXBlclRpbGUocm93LCBjb2wsIGNvbG9yLCBzdXBlclR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnBsYWNlU3VwZXJUaWxlKHJvdywgY29sLCB7IGNvbG9yLCBzdXBlclR5cGUgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVyZXIuYW5pbWF0ZVNpbmdsZVNwYXduKHJvdywgY29sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0dGxlRmllbGQoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uYWRkU2NvcmUocG9pbnRzKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uY29uc3VtZU1vdmUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hIVUQoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmVuZE9mVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcHJvY2Vzc1N1cGVyVGlsZShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHR5cGU6IFN1cGVyVGlsZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBzZWVkcyA9IFN1cGVyVGlsZVJlc29sdmVyLnJlc29sdmUodHlwZSwgdGhpcy5maWVsZCwgcm93LCBjb2wpO1xyXG4gICAgICAgIHNlZWRzLnB1c2goeyByb3csIGNvbCB9KTtcclxuICAgICAgICBjb25zdCBhZmZlY3RlZCA9IFN1cGVyVGlsZVJlc29sdmVyLmNvbGxlY3RDaGFpbmVkKHRoaXMuZmllbGQsIHNlZWRzKTtcclxuICAgICAgICBjb25zdCBwb2ludHMgICA9IHRoaXMuc2Vzc2lvbi5jYWxjRWZmZWN0U2NvcmUoYWZmZWN0ZWQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZC5yZW1vdmVUaWxlcyhhZmZlY3RlZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlU3VwZXJFZmZlY3QodHlwZSwgeyByb3csIGNvbCB9LCBhZmZlY3RlZCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaG93RmxvYXRpbmdTY29yZShyb3csIGNvbCwgcG9pbnRzLCB0aGlzLmdhbWVGb250KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXR0bGVGaWVsZCgpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5hZGRTY29yZShwb2ludHMpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5jb25zdW1lTW92ZSgpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEhVRCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZW5kT2ZUdXJuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwcm9jZXNzQm9tYkJvb3N0ZXIocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2VlZHMgICAgPSB0aGlzLmZpZWxkLnBvc2l0aW9uc0luUmFkaXVzKHJvdywgY29sLCBHYW1lQ29uZmlnLkJPTUJfUkFESVVTKTtcclxuICAgICAgICBjb25zdCBhZmZlY3RlZCA9IFN1cGVyVGlsZVJlc29sdmVyLmNvbGxlY3RDaGFpbmVkKHRoaXMuZmllbGQsIHNlZWRzKTtcclxuICAgICAgICBjb25zdCBwb2ludHMgICA9IHRoaXMuc2Vzc2lvbi5jYWxjRWZmZWN0U2NvcmUoYWZmZWN0ZWQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZC5yZW1vdmVUaWxlcyhhZmZlY3RlZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlQm9tYkJsYXN0KHsgcm93LCBjb2wgfSwgYWZmZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2hvd0Zsb2F0aW5nU2NvcmUocm93LCBjb2wsIHBvaW50cywgdGhpcy5nYW1lRm9udCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0dGxlRmllbGQoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uYWRkU2NvcmUocG9pbnRzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hIVUQoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmVuZE9mVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcHJvY2Vzc1RlbGVwb3J0KGE6IEdyaWRQb3NpdGlvbiwgYjogR3JpZFBvc2l0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5zd2FwVGlsZXMoYSwgYik7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlU3dhcChhLCBiKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hIVUQoKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhuZXcgSWRsZVN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0dGxlRmllbGQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZ3JhdiA9IHRoaXMuZmllbGQuYXBwbHlHcmF2aXR5KCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlR3Jhdml0eShncmF2KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3Bhd25lZCA9IHRoaXMuZmllbGQuZmlsbEVtcHR5KCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlU3Bhd24oc3Bhd25lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBlbmRPZlR1cm4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbi5jaGVja1dpbigpKSAgeyB0aGlzLnNob3dSZXN1bHQodHJ1ZSk7ICByZXR1cm47IH1cclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmNoZWNrTG9zZSgpKSB7IHRoaXMuc2hvd1Jlc3VsdChmYWxzZSk7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmF1dG9TaHVmZmxlKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXNzaW9uLmlzR2FtZU92ZXIoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhuZXcgSWRsZVN0YXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGF1dG9TaHVmZmxlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5maWVsZC5oYXNWYWxpZE1vdmVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlc3Npb24uY29uc3VtZVNodWZmbGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLmZvcmNlTG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkLnNodWZmbGUoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJlci5hbmltYXRlU2h1ZmZsZSh0aGlzLmZpZWxkLmdldEdyaWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5zdXJlVmFsaWRCb2FyZCgpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuZmllbGQuaGFzVmFsaWRNb3ZlcygpKSB0aGlzLmZpZWxkLnNodWZmbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hIVUQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odWQuYW5pbWF0ZVNjb3JlVG8odGhpcy5zZXNzaW9uLmdldFNjb3JlKCkpO1xyXG4gICAgICAgIHRoaXMuaHVkLnNldE1vdmVzKHRoaXMuc2Vzc2lvbi5nZXRNb3Zlc1JlbWFpbmluZygpKTtcclxuICAgICAgICB0aGlzLmh1ZC5zZXRCb21iQ291bnQodGhpcy5zZXNzaW9uLmdldEJvb3N0ZXJDb3VudChCb29zdGVyVHlwZS5Cb21iKSk7XHJcbiAgICAgICAgdGhpcy5odWQuc2V0VGVsZXBvcnRDb3VudCh0aGlzLnNlc3Npb24uZ2V0Qm9vc3RlckNvdW50KEJvb3N0ZXJUeXBlLlRlbGVwb3J0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93UmVzdWx0KGlzV2luOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3IExvY2tlZFN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMucG9wdXAuc2hvdyhcclxuICAgICAgICAgICAgaXNXaW4sXHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5nZXRTY29yZSgpLFxyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uZ2V0VGFyZ2V0U2NvcmUoKSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yZXN0YXJ0KCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdpcmVSZW5kZXJlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwYW5lbCA9IGNjLmZpbmQoJ0dhbWVQYW5lbCcsIHRoaXMubm9kZSkhO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBwYW5lbC5hZGRDb21wb25lbnQoRmllbGRSZW5kZXJlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1cGVyTWFwID0gbmV3IE1hcDxTdXBlclRpbGVUeXBlLCBjYy5TcHJpdGVGcmFtZT4oKTtcclxuICAgICAgICBpZiAodGhpcy5zdXBlclJvd1Nwcml0ZSkgICBzdXBlck1hcC5zZXQoU3VwZXJUaWxlVHlwZS5Sb3dDbGVhciwgICAgdGhpcy5zdXBlclJvd1Nwcml0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VwZXJDb2xTcHJpdGUpICAgc3VwZXJNYXAuc2V0KFN1cGVyVGlsZVR5cGUuQ29sdW1uQ2xlYXIsIHRoaXMuc3VwZXJDb2xTcHJpdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1cGVyQm9tYlNwcml0ZSkgIHN1cGVyTWFwLnNldChTdXBlclRpbGVUeXBlLlJhZGl1c0JvbWIsICB0aGlzLnN1cGVyQm9tYlNwcml0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VwZXJGaWVsZFNwcml0ZSkgc3VwZXJNYXAuc2V0KFN1cGVyVGlsZVR5cGUuRmllbGRDbGVhciwgIHRoaXMuc3VwZXJGaWVsZFNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5HUklEX1JPV1MsIEdhbWVDb25maWcuR1JJRF9DT0xTLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzLCBzdXBlck1hcCxcclxuICAgICAgICAgICAgKHIsIGMpID0+IHRoaXMuaW5wdXRTdGF0ZS5vbkNlbGxDbGljayh0aGlzLCByLCBjKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2lyZUhVRCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IChwYXRoOiBzdHJpbmcpOiBjYy5MYWJlbCB8IG51bGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gY2MuZmluZChwYXRoLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbiA/IG4uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSA6IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcmVMYWJlbCA9IGxhYmVsKCdTY29yZVBhbmVsL1Njb3JlVHh0Jyk7XHJcbiAgICAgICAgY29uc3QgbW92ZXNMYWJlbCA9IGxhYmVsKCdTY29yZVBhbmVsL01vdmVzUGFuZWwvTW92ZXMnKTtcclxuICAgICAgICBjb25zdCBib21iTGFiZWwgID0gbGFiZWwoJ0Jvb3N0ZXJCb21iUGFuZWwvVGVsZXBvcnRUeHQnKTtcclxuICAgICAgICBjb25zdCB0ZWxlTGFiZWwgID0gbGFiZWwoJ0Jvb3N0ZXJUZWxlcG9ydFBhbmVsL1RlbGVwb3J0VHh0Jyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lRm9udCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGwgb2YgW3Njb3JlTGFiZWwsIG1vdmVzTGFiZWwsIGJvbWJMYWJlbCwgdGVsZUxhYmVsXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGwgJiYgbC5mb250KSB7IHRoaXMuZ2FtZUZvbnQgPSBsLmZvbnQ7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaHVkID0gbmV3IEhVRFByZXNlbnRlcihcclxuICAgICAgICAgICAgc2NvcmVMYWJlbCwgbW92ZXNMYWJlbCwgYm9tYkxhYmVsLCB0ZWxlTGFiZWwsXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUZvbnQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbWJQYW5lbCA9IGNjLmZpbmQoJ0Jvb3N0ZXJCb21iUGFuZWwnLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnN0IHRlbGVQYW5lbCA9IGNjLmZpbmQoJ0Jvb3N0ZXJUZWxlcG9ydFBhbmVsJywgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLmh1ZC5pbml0Qm9vc3RlclBhbmVscyhib21iUGFuZWwsIHRlbGVQYW5lbCk7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvbiBDbGljayBFdmVudHMgYXJlIHVzZWQgZnJvbSB0aGUgc2NlbmU7IG1hbnVhbCB0b3VjaCB3aXJpbmcgaXMgZGlzYWJsZWRcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdpcmVCb29zdGVyVG91Y2gocGFuZWw6IGNjLk5vZGUgfCBudWxsLCBoYW5kbGVyOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFwYW5lbCkgcmV0dXJuO1xyXG4gICAgICAgIHBhbmVsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxyXG4gICAgICAgICAgICAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSwgdGhpcyk7XHJcbiAgICAgICAgcGFuZWwub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxyXG4gICAgICAgICAgICAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBoYW5kbGVyKCk7IH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhuZXcgTG9ja2VkU3RhdGUoKSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyZXIuYW5pbWF0ZURpc21pc3NBbGwoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyQWxsVGlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZCAgID0gbmV3IEZpZWxkTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBuZXcgR2FtZVNlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmVuc3VyZVZhbGlkQm9hcmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5odWQucmVzZXRTY29yZSh0aGlzLnNlc3Npb24uZ2V0VGFyZ2V0U2NvcmUoKSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jcmVhdGVBbGxUaWxlcyh0aGlzLmZpZWxkLmdldEdyaWQoKSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoSFVEKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyZXIuYW5pbWF0ZUluaXRpYWxBcHBlYXJhbmNlKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3IElkbGVTdGF0ZSgpKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/Types.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91a0fAJ5IJC7oaC34CYUCtm', 'Types');
// Scripts/core/Types.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResult = exports.BoosterType = exports.SuperTileType = exports.TILE_COLOR_COUNT = exports.TileColor = void 0;
var TileColor;
(function (TileColor) {
    TileColor[TileColor["Blue"] = 0] = "Blue";
    TileColor[TileColor["Red"] = 1] = "Red";
    TileColor[TileColor["Green"] = 2] = "Green";
    TileColor[TileColor["Yellow"] = 3] = "Yellow";
    TileColor[TileColor["Purple"] = 4] = "Purple";
})(TileColor = exports.TileColor || (exports.TileColor = {}));
exports.TILE_COLOR_COUNT = 5;
var SuperTileType;
(function (SuperTileType) {
    SuperTileType[SuperTileType["None"] = 0] = "None";
    SuperTileType[SuperTileType["RowClear"] = 1] = "RowClear";
    SuperTileType[SuperTileType["ColumnClear"] = 2] = "ColumnClear";
    SuperTileType[SuperTileType["RadiusBomb"] = 3] = "RadiusBomb";
    SuperTileType[SuperTileType["FieldClear"] = 4] = "FieldClear";
})(SuperTileType = exports.SuperTileType || (exports.SuperTileType = {}));
var BoosterType;
(function (BoosterType) {
    BoosterType[BoosterType["None"] = 0] = "None";
    BoosterType[BoosterType["Bomb"] = 1] = "Bomb";
    BoosterType[BoosterType["Teleport"] = 2] = "Teleport";
})(BoosterType = exports.BoosterType || (exports.BoosterType = {}));
var GameResult;
(function (GameResult) {
    GameResult[GameResult["None"] = 0] = "None";
    GameResult[GameResult["Win"] = 1] = "Win";
    GameResult[GameResult["Lose"] = 2] = "Lose";
})(GameResult = exports.GameResult || (exports.GameResult = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29yZVxcVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFVLENBQUE7SUFDVix1Q0FBVSxDQUFBO0lBQ1YsMkNBQVUsQ0FBQTtJQUNWLDZDQUFVLENBQUE7SUFDViw2Q0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFFbEMsSUFBWSxhQU1YO0FBTkQsV0FBWSxhQUFhO0lBQ3JCLGlEQUFlLENBQUE7SUFDZix5REFBZSxDQUFBO0lBQ2YsK0RBQWUsQ0FBQTtJQUNmLDZEQUFlLENBQUE7SUFDZiw2REFBZSxDQUFBO0FBQ25CLENBQUMsRUFOVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU14QjtBQUVELElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiw2Q0FBWSxDQUFBO0lBQ1osNkNBQVksQ0FBQTtJQUNaLHFEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBRUQsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLDJDQUFRLENBQUE7SUFDUix5Q0FBUSxDQUFBO0lBQ1IsMkNBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFRpbGVDb2xvciB7XHJcbiAgICBCbHVlICAgPSAwLFxyXG4gICAgUmVkICAgID0gMSxcclxuICAgIEdyZWVuICA9IDIsXHJcbiAgICBZZWxsb3cgPSAzLFxyXG4gICAgUHVycGxlID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRJTEVfQ09MT1JfQ09VTlQgPSA1O1xyXG5cclxuZXhwb3J0IGVudW0gU3VwZXJUaWxlVHlwZSB7XHJcbiAgICBOb25lICAgICAgICA9IDAsXHJcbiAgICBSb3dDbGVhciAgICA9IDEsXHJcbiAgICBDb2x1bW5DbGVhciA9IDIsXHJcbiAgICBSYWRpdXNCb21iICA9IDMsXHJcbiAgICBGaWVsZENsZWFyICA9IDQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJvb3N0ZXJUeXBlIHtcclxuICAgIE5vbmUgICAgID0gMCxcclxuICAgIEJvbWIgICAgID0gMSxcclxuICAgIFRlbGVwb3J0ID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2FtZVJlc3VsdCB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFdpbiAgPSAxLFxyXG4gICAgTG9zZSA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbERhdGEge1xyXG4gICAgY29sb3I6IFRpbGVDb2xvcjtcclxuICAgIHN1cGVyVHlwZTogU3VwZXJUaWxlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkUG9zaXRpb24ge1xyXG4gICAgcm93OiBudW1iZXI7XHJcbiAgICBjb2w6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmF2aXR5TW92ZSB7XHJcbiAgICBmcm9tOiBHcmlkUG9zaXRpb247XHJcbiAgICB0bzogR3JpZFBvc2l0aW9uO1xyXG4gICAgY2VsbDogQ2VsbERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Bhd25lZFRpbGUge1xyXG4gICAgcG9zaXRpb246IEdyaWRQb3NpdGlvbjtcclxuICAgIGNlbGw6IENlbGxEYXRhO1xyXG4gICAgZmFsbERpc3RhbmNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkUXVlcnkge1xyXG4gICAgZ2V0Um93cygpOiBudW1iZXI7XHJcbiAgICBnZXRDb2xzKCk6IG51bWJlcjtcclxuICAgIGdldENlbGwocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogQ2VsbERhdGEgfCBudWxsO1xyXG4gICAgcG9zaXRpb25zSW5Sb3cocm93OiBudW1iZXIpOiBHcmlkUG9zaXRpb25bXTtcclxuICAgIHBvc2l0aW9uc0luQ29sdW1uKGNvbDogbnVtYmVyKTogR3JpZFBvc2l0aW9uW107XHJcbiAgICBwb3NpdGlvbnNJblJhZGl1cyhjZW50ZXJSb3c6IG51bWJlciwgY2VudGVyQ29sOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogR3JpZFBvc2l0aW9uW107XHJcbiAgICBhbGxOb25OdWxsUG9zaXRpb25zKCk6IEdyaWRQb3NpdGlvbltdO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/rendering/HUDPresenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd398cx1SONOQrNcvcCWTIO9', 'HUDPresenter');
// Scripts/rendering/HUDPresenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HUDPresenter = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Types_1 = require("../core/Types");
var HUDPresenter = /** @class */ (function () {
    function HUDPresenter(scoreLabel, movesLabel, bombLabel, teleportLabel, font) {
        this.scoreLabel = scoreLabel;
        this.movesLabel = movesLabel;
        this.bombLabel = bombLabel;
        this.teleportLabel = teleportLabel;
        this.bombPanel = null;
        this.telePanel = null;
        this.bombPanelBaseScale = 1;
        this.telePanelBaseScale = 1;
        this.scoreDisplayed = 0;
        this.scoreTarget = 0;
        this.scoreFrom = 0;
        this.scoreElapsed = 0;
        this.scoreDuration = 0;
        this.targetScore = 0;
        if (font)
            this.applyFont(font);
    }
    HUDPresenter.prototype.initBoosterPanels = function (bombPanel, telePanel) {
        this.bombPanel = bombPanel;
        this.telePanel = telePanel;
        if (bombPanel)
            this.bombPanelBaseScale = bombPanel.scale;
        if (telePanel)
            this.telePanelBaseScale = telePanel.scale;
    };
    HUDPresenter.prototype.update = function (dt) {
        if (this.scoreDuration <= 0 || this.scoreDisplayed === this.scoreTarget)
            return;
        this.scoreElapsed += dt;
        var t = Math.min(1, this.scoreElapsed / this.scoreDuration);
        var ease = 1 - Math.pow(1 - t, 3);
        this.scoreDisplayed = Math.round(this.scoreFrom + (this.scoreTarget - this.scoreFrom) * ease);
        this.setScore(this.scoreDisplayed, this.targetScore);
    };
    HUDPresenter.prototype.animateScoreTo = function (target) {
        if (target === this.scoreTarget && this.scoreDisplayed === target)
            return;
        this.scoreFrom = this.scoreDisplayed;
        this.scoreTarget = target;
        this.scoreElapsed = 0;
        var diff = Math.abs(target - this.scoreFrom);
        this.scoreDuration = Math.max(GameConfig_1.GameConfig.SCORE_COUNTER_DURATION, Math.min(0.9, diff / 300));
    };
    HUDPresenter.prototype.resetScore = function (targetScore) {
        this.scoreDisplayed = 0;
        this.scoreTarget = 0;
        this.scoreFrom = 0;
        this.scoreDuration = 0;
        this.targetScore = targetScore;
        this.setScore(0, targetScore);
    };
    HUDPresenter.prototype.setActiveBooster = function (type) {
        this.setPanelActive(this.bombPanel, this.bombPanelBaseScale, type === Types_1.BoosterType.Bomb);
        this.setPanelActive(this.telePanel, this.telePanelBaseScale, type === Types_1.BoosterType.Teleport);
    };
    HUDPresenter.prototype.setScore = function (current, target) {
        if (this.scoreLabel)
            this.scoreLabel.string = "\u041E\u0427\u041A\u0418:\n" + current + "/" + target;
    };
    HUDPresenter.prototype.setMoves = function (remaining) {
        if (this.movesLabel)
            this.movesLabel.string = "" + remaining;
    };
    HUDPresenter.prototype.setBombCount = function (n) {
        if (this.bombLabel)
            this.bombLabel.string = "" + n;
    };
    HUDPresenter.prototype.setTeleportCount = function (n) {
        if (this.teleportLabel)
            this.teleportLabel.string = "" + n;
    };
    HUDPresenter.prototype.setPanelActive = function (panel, baseScale, active) {
        if (!panel)
            return;
        cc.Tween.stopAllByTarget(panel);
        if (active) {
            cc.tween(panel)
                .repeatForever(cc.tween()
                .to(0.35, { scale: baseScale * 1.1 }, { easing: 'sineInOut' })
                .to(0.35, { scale: baseScale * 0.95 }, { easing: 'sineInOut' }))
                .start();
        }
        else {
            panel.scale = baseScale;
        }
    };
    HUDPresenter.prototype.applyFont = function (font) {
        var labels = [this.scoreLabel, this.movesLabel, this.bombLabel, this.teleportLabel];
        for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
            var l = labels_1[_i];
            if (l) {
                l.font = font;
                l.useSystemFont = false;
            }
        }
    };
    return HUDPresenter;
}());
exports.HUDPresenter = HUDPresenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccmVuZGVyaW5nXFxIVURQcmVzZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHVDQUE0QztBQUU1QztJQWNJLHNCQUNxQixVQUE4QixFQUM5QixVQUE4QixFQUM5QixTQUE4QixFQUM5QixhQUE4QixFQUMvQyxJQUFjO1FBSkcsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBaEIzQyxjQUFTLEdBQW9CLElBQUksQ0FBQztRQUNsQyxjQUFTLEdBQW9CLElBQUksQ0FBQztRQUNsQyx1QkFBa0IsR0FBSSxDQUFDLENBQUM7UUFDeEIsdUJBQWtCLEdBQUksQ0FBQyxDQUFDO1FBRXhCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQU0sQ0FBQyxDQUFDO1FBQ25CLGNBQVMsR0FBUSxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBSyxDQUFDLENBQUM7UUFDbkIsa0JBQWEsR0FBSSxDQUFDLENBQUM7UUFDbkIsZ0JBQVcsR0FBTSxDQUFDLENBQUM7UUFTdkIsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sd0NBQWlCLEdBQXhCLFVBQXlCLFNBQXlCLEVBQUUsU0FBeUI7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDN0Qs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Q0FBQyxlQUFBO1lBQ1IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksR0FBWSxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBO0FBakhZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9HYW1lQ29uZmlnJztcclxuaW1wb3J0IHsgQm9vc3RlclR5cGUgfSBmcm9tICcuLi9jb3JlL1R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIVURQcmVzZW50ZXIge1xyXG5cclxuICAgIHByaXZhdGUgYm9tYlBhbmVsOiAgY2MuTm9kZSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0ZWxlUGFuZWw6ICBjYy5Ob2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJvbWJQYW5lbEJhc2VTY2FsZSAgPSAxO1xyXG4gICAgcHJpdmF0ZSB0ZWxlUGFuZWxCYXNlU2NhbGUgID0gMTtcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlRGlzcGxheWVkID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmVUYXJnZXQgICAgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZUZyb20gICAgICA9IDA7XHJcbiAgICBwcml2YXRlIHNjb3JlRWxhcHNlZCAgID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmVEdXJhdGlvbiAgPSAwO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXRTY29yZSAgICA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzY29yZUxhYmVsOiAgICBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtb3Zlc0xhYmVsOiAgICBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBib21iTGFiZWw6ICAgICBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZWxlcG9ydExhYmVsOiBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgZm9udD86IGNjLkZvbnQsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoZm9udCkgdGhpcy5hcHBseUZvbnQoZm9udCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRCb29zdGVyUGFuZWxzKGJvbWJQYW5lbDogY2MuTm9kZSB8IG51bGwsIHRlbGVQYW5lbDogY2MuTm9kZSB8IG51bGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvbWJQYW5lbCA9IGJvbWJQYW5lbDtcclxuICAgICAgICB0aGlzLnRlbGVQYW5lbCA9IHRlbGVQYW5lbDtcclxuICAgICAgICBpZiAoYm9tYlBhbmVsKSB0aGlzLmJvbWJQYW5lbEJhc2VTY2FsZSA9IGJvbWJQYW5lbC5zY2FsZTtcclxuICAgICAgICBpZiAodGVsZVBhbmVsKSB0aGlzLnRlbGVQYW5lbEJhc2VTY2FsZSA9IHRlbGVQYW5lbC5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zY29yZUR1cmF0aW9uIDw9IDAgfHwgdGhpcy5zY29yZURpc3BsYXllZCA9PT0gdGhpcy5zY29yZVRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlRWxhcHNlZCArPSBkdDtcclxuICAgICAgICBjb25zdCB0ICAgID0gTWF0aC5taW4oMSwgdGhpcy5zY29yZUVsYXBzZWQgLyB0aGlzLnNjb3JlRHVyYXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGVhc2UgPSAxIC0gTWF0aC5wb3coMSAtIHQsIDMpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ZWQgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlRnJvbSArICh0aGlzLnNjb3JlVGFyZ2V0IC0gdGhpcy5zY29yZUZyb20pICogZWFzZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U2NvcmUodGhpcy5zY29yZURpc3BsYXllZCwgdGhpcy50YXJnZXRTY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFuaW1hdGVTY29yZVRvKHRhcmdldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5zY29yZVRhcmdldCAmJiB0aGlzLnNjb3JlRGlzcGxheWVkID09PSB0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZUZyb20gICAgPSB0aGlzLnNjb3JlRGlzcGxheWVkO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUYXJnZXQgID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGFwc2VkID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRhcmdldCAtIHRoaXMuc2NvcmVGcm9tKTtcclxuICAgICAgICB0aGlzLnNjb3JlRHVyYXRpb24gPSBNYXRoLm1heChcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5TQ09SRV9DT1VOVEVSX0RVUkFUSU9OLFxyXG4gICAgICAgICAgICBNYXRoLm1pbigwLjksIGRpZmYgLyAzMDApLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0U2NvcmUodGFyZ2V0U2NvcmU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUYXJnZXQgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVGcm9tICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEdXJhdGlvbiAgPSAwO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0U2NvcmUgICAgPSB0YXJnZXRTY29yZTtcclxuICAgICAgICB0aGlzLnNldFNjb3JlKDAsIHRhcmdldFNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWN0aXZlQm9vc3Rlcih0eXBlOiBCb29zdGVyVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0UGFuZWxBY3RpdmUodGhpcy5ib21iUGFuZWwsIHRoaXMuYm9tYlBhbmVsQmFzZVNjYWxlLCB0eXBlID09PSBCb29zdGVyVHlwZS5Cb21iKTtcclxuICAgICAgICB0aGlzLnNldFBhbmVsQWN0aXZlKHRoaXMudGVsZVBhbmVsLCB0aGlzLnRlbGVQYW5lbEJhc2VTY2FsZSwgdHlwZSA9PT0gQm9vc3RlclR5cGUuVGVsZXBvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTY29yZShjdXJyZW50OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDQntCn0JrQmDpcXG4ke2N1cnJlbnR9LyR7dGFyZ2V0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1vdmVzKHJlbWFpbmluZzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZXNMYWJlbCkgdGhpcy5tb3Zlc0xhYmVsLnN0cmluZyA9IGAke3JlbWFpbmluZ31gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRCb21iQ291bnQobjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYkxhYmVsKSB0aGlzLmJvbWJMYWJlbC5zdHJpbmcgPSBgJHtufWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRlbGVwb3J0Q291bnQobjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudGVsZXBvcnRMYWJlbCkgdGhpcy50ZWxlcG9ydExhYmVsLnN0cmluZyA9IGAke259YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBhbmVsQWN0aXZlKHBhbmVsOiBjYy5Ob2RlIHwgbnVsbCwgYmFzZVNjYWxlOiBudW1iZXIsIGFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICghcGFuZWwpIHJldHVybjtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocGFuZWwpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHBhbmVsKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zNSwgeyBzY2FsZTogYmFzZVNjYWxlICogMS4xIH0sICB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuOTUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFuZWwuc2NhbGUgPSBiYXNlU2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlGb250KGZvbnQ6IGNjLkZvbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbdGhpcy5zY29yZUxhYmVsLCB0aGlzLm1vdmVzTGFiZWwsIHRoaXMuYm9tYkxhYmVsLCB0aGlzLnRlbGVwb3J0TGFiZWxdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbCBvZiBsYWJlbHMpIHtcclxuICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgIGwuZm9udCAgICAgICAgICA9IGZvbnQ7XHJcbiAgICAgICAgICAgICAgICBsLnVzZVN5c3RlbUZvbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb077LlaF9Nab1w7bTtobKi', 'InputState');
// Scripts/input/InputState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedState = exports.TeleportSecondPickState = exports.TeleportFirstPickState = exports.BombBoosterState = exports.IdleState = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Types_1 = require("../core/Types");
var IdleState = /** @class */ (function () {
    function IdleState() {
        this.activeBooster = Types_1.BoosterType.None;
    }
    IdleState.prototype.onCellClick = function (ctx, row, col) {
        var cell = ctx.getCellAt(row, col);
        if (!cell)
            return;
        if (cell.superType !== Types_1.SuperTileType.None) {
            ctx.executeSuperTileActivation(row, col, cell.superType);
            return;
        }
        var group = ctx.findGroup(row, col);
        if (group.length >= GameConfig_1.GameConfig.MIN_GROUP_SIZE) {
            ctx.executeGroupMatch(row, col);
        }
    };
    IdleState.prototype.onBoosterBombClick = function (ctx) {
        if (ctx.getBoosterCount(Types_1.BoosterType.Bomb) <= 0)
            return;
        ctx.transitionTo(new BombBoosterState());
    };
    IdleState.prototype.onBoosterTeleportClick = function (ctx) {
        if (ctx.getBoosterCount(Types_1.BoosterType.Teleport) <= 0)
            return;
        ctx.transitionTo(new TeleportFirstPickState());
    };
    return IdleState;
}());
exports.IdleState = IdleState;
var BombBoosterState = /** @class */ (function () {
    function BombBoosterState() {
        this.activeBooster = Types_1.BoosterType.Bomb;
    }
    BombBoosterState.prototype.onCellClick = function (ctx, row, col) {
        ctx.executeBombBooster(row, col);
    };
    BombBoosterState.prototype.onBoosterBombClick = function (ctx) {
        ctx.transitionTo(new IdleState());
    };
    BombBoosterState.prototype.onBoosterTeleportClick = function (ctx) {
        ctx.transitionTo(new IdleState());
    };
    return BombBoosterState;
}());
exports.BombBoosterState = BombBoosterState;
var TeleportFirstPickState = /** @class */ (function () {
    function TeleportFirstPickState() {
        this.activeBooster = Types_1.BoosterType.Teleport;
    }
    TeleportFirstPickState.prototype.onCellClick = function (ctx, row, col) {
        if (!ctx.getCellAt(row, col))
            return;
        ctx.highlightTile(row, col, true);
        ctx.transitionTo(new TeleportSecondPickState({ row: row, col: col }));
    };
    TeleportFirstPickState.prototype.onBoosterBombClick = function (ctx) {
        ctx.transitionTo(new IdleState());
    };
    TeleportFirstPickState.prototype.onBoosterTeleportClick = function (ctx) {
        ctx.transitionTo(new IdleState());
    };
    return TeleportFirstPickState;
}());
exports.TeleportFirstPickState = TeleportFirstPickState;
var TeleportSecondPickState = /** @class */ (function () {
    function TeleportSecondPickState(firstPick) {
        this.firstPick = firstPick;
        this.activeBooster = Types_1.BoosterType.Teleport;
    }
    TeleportSecondPickState.prototype.onCellClick = function (ctx, row, col) {
        var a = this.firstPick;
        if (a.row === row && a.col === col) {
            ctx.highlightTile(a.row, a.col, false);
            ctx.transitionTo(new TeleportFirstPickState());
            return;
        }
        ctx.clearHighlights();
        ctx.executeTeleportSwap(a, { row: row, col: col });
    };
    TeleportSecondPickState.prototype.onBoosterBombClick = function (ctx) {
        ctx.highlightTile(this.firstPick.row, this.firstPick.col, false);
        ctx.transitionTo(new IdleState());
    };
    TeleportSecondPickState.prototype.onBoosterTeleportClick = function (ctx) {
        ctx.highlightTile(this.firstPick.row, this.firstPick.col, false);
        ctx.transitionTo(new IdleState());
    };
    return TeleportSecondPickState;
}());
exports.TeleportSecondPickState = TeleportSecondPickState;
var LockedState = /** @class */ (function () {
    function LockedState() {
        this.activeBooster = Types_1.BoosterType.None;
    }
    LockedState.prototype.onCellClick = function (_ctx, _row, _col) { };
    LockedState.prototype.onBoosterBombClick = function (_ctx) { };
    LockedState.prototype.onBoosterTeleportClick = function (_ctx) { };
    return LockedState;
}());
exports.LockedState = LockedState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcaW5wdXRcXElucHV0U3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHVDQUV1QjtBQTBCdkI7SUFBQTtRQUVvQixrQkFBYSxHQUFHLG1CQUFXLENBQUMsSUFBSSxDQUFDO0lBMEJyRCxDQUFDO0lBeEJVLCtCQUFXLEdBQWxCLFVBQW1CLEdBQWtCLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDM0QsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxxQkFBYSxDQUFDLElBQUksRUFBRTtZQUN2QyxHQUFHLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekQsT0FBTztTQUNWO1FBRUQsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLHVCQUFVLENBQUMsY0FBYyxFQUFFO1lBQzNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRU0sc0NBQWtCLEdBQXpCLFVBQTBCLEdBQWtCO1FBQ3hDLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3ZELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLDBDQUFzQixHQUE3QixVQUE4QixHQUFrQjtRQUM1QyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsbUJBQVcs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QUFZLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSx3REFBc0IsR0FBN0IsVUFBOEIsR0FBa0I7UUFDNUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLDBEQUF1QjtBQThCcEM7SUFBQTtRQUVvQixrQkFBYSxHQUFHLG1CQUFXLENBQUMsSUFBSSxDQUFDO0lBS3JELENBQUM7SUFIVSxpQ0FBVyxHQUFsQixVQUFtQixJQUFtQixFQUFFLElBQVksRUFBRSxJQUFZLElBQVMsQ0FBQztJQUNyRSx3Q0FBa0IsR0FBekIsVUFBMEIsSUFBbUIsSUFBUyxDQUFDO0lBQ2hELDRDQUFzQixHQUE3QixVQUE4QixJQUFtQixJQUFTLENBQUM7SUFDL0Qsa0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9HYW1lQ29uZmlnJztcclxuaW1wb3J0IHtcclxuICAgIEJvb3N0ZXJUeXBlLCBDZWxsRGF0YSwgR3JpZFBvc2l0aW9uLCBTdXBlclRpbGVUeXBlLFxyXG59IGZyb20gJy4uL2NvcmUvVHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRDb250ZXh0IHtcclxuICAgIHRyYW5zaXRpb25UbyhzdGF0ZTogSUlucHV0U3RhdGUpOiB2b2lkO1xyXG5cclxuICAgIGdldENlbGxBdChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBDZWxsRGF0YSB8IG51bGw7XHJcbiAgICBmaW5kR3JvdXAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogR3JpZFBvc2l0aW9uW107XHJcbiAgICBnZXRCb29zdGVyQ291bnQodHlwZTogQm9vc3RlclR5cGUpOiBudW1iZXI7XHJcblxyXG4gICAgZXhlY3V0ZUdyb3VwTWF0Y2gocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZDtcclxuICAgIGV4ZWN1dGVTdXBlclRpbGVBY3RpdmF0aW9uKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgdHlwZTogU3VwZXJUaWxlVHlwZSk6IHZvaWQ7XHJcbiAgICBleGVjdXRlQm9tYkJvb3N0ZXIocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZDtcclxuICAgIGV4ZWN1dGVUZWxlcG9ydFN3YXAoYTogR3JpZFBvc2l0aW9uLCBiOiBHcmlkUG9zaXRpb24pOiB2b2lkO1xyXG5cclxuICAgIGhpZ2hsaWdodFRpbGUocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBvbjogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBjbGVhckhpZ2hsaWdodHMoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRTdGF0ZSB7XHJcbiAgICByZWFkb25seSBhY3RpdmVCb29zdGVyOiBCb29zdGVyVHlwZTtcclxuXHJcbiAgICBvbkNlbGxDbGljayhjdHg6IElJbnB1dENvbnRleHQsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBvbkJvb3N0ZXJCb21iQ2xpY2soY3R4OiBJSW5wdXRDb250ZXh0KTogdm9pZDtcclxuICAgIG9uQm9vc3RlclRlbGVwb3J0Q2xpY2soY3R4OiBJSW5wdXRDb250ZXh0KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElkbGVTdGF0ZSBpbXBsZW1lbnRzIElJbnB1dFN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYWN0aXZlQm9vc3RlciA9IEJvb3N0ZXJUeXBlLk5vbmU7XHJcblxyXG4gICAgcHVibGljIG9uQ2VsbENsaWNrKGN0eDogSUlucHV0Q29udGV4dCwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGN0eC5nZXRDZWxsQXQocm93LCBjb2wpO1xyXG4gICAgICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5zdXBlclR5cGUgIT09IFN1cGVyVGlsZVR5cGUuTm9uZSkge1xyXG4gICAgICAgICAgICBjdHguZXhlY3V0ZVN1cGVyVGlsZUFjdGl2YXRpb24ocm93LCBjb2wsIGNlbGwuc3VwZXJUeXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBjdHguZmluZEdyb3VwKHJvdywgY29sKTtcclxuICAgICAgICBpZiAoZ3JvdXAubGVuZ3RoID49IEdhbWVDb25maWcuTUlOX0dST1VQX1NJWkUpIHtcclxuICAgICAgICAgICAgY3R4LmV4ZWN1dGVHcm91cE1hdGNoKHJvdywgY29sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQm9vc3RlckJvbWJDbGljayhjdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY3R4LmdldEJvb3N0ZXJDb3VudChCb29zdGVyVHlwZS5Cb21iKSA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgY3R4LnRyYW5zaXRpb25UbyhuZXcgQm9tYkJvb3N0ZXJTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Cb29zdGVyVGVsZXBvcnRDbGljayhjdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY3R4LmdldEJvb3N0ZXJDb3VudChCb29zdGVyVHlwZS5UZWxlcG9ydCkgPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGN0eC50cmFuc2l0aW9uVG8obmV3IFRlbGVwb3J0Rmlyc3RQaWNrU3RhdGUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb21iQm9vc3RlclN0YXRlIGltcGxlbWVudHMgSUlucHV0U3RhdGUge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBhY3RpdmVCb29zdGVyID0gQm9vc3RlclR5cGUuQm9tYjtcclxuXHJcbiAgICBwdWJsaWMgb25DZWxsQ2xpY2soY3R4OiBJSW5wdXRDb250ZXh0LCByb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjdHguZXhlY3V0ZUJvbWJCb29zdGVyKHJvdywgY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Cb29zdGVyQm9tYkNsaWNrKGN0eDogSUlucHV0Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGN0eC50cmFuc2l0aW9uVG8obmV3IElkbGVTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Cb29zdGVyVGVsZXBvcnRDbGljayhjdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjdHgudHJhbnNpdGlvblRvKG5ldyBJZGxlU3RhdGUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZWxlcG9ydEZpcnN0UGlja1N0YXRlIGltcGxlbWVudHMgSUlucHV0U3RhdGUge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBhY3RpdmVCb29zdGVyID0gQm9vc3RlclR5cGUuVGVsZXBvcnQ7XHJcblxyXG4gICAgcHVibGljIG9uQ2VsbENsaWNrKGN0eDogSUlucHV0Q29udGV4dCwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjdHguZ2V0Q2VsbEF0KHJvdywgY29sKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdHguaGlnaGxpZ2h0VGlsZShyb3csIGNvbCwgdHJ1ZSk7XHJcbiAgICAgICAgY3R4LnRyYW5zaXRpb25UbyhuZXcgVGVsZXBvcnRTZWNvbmRQaWNrU3RhdGUoeyByb3csIGNvbCB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQm9vc3RlckJvbWJDbGljayhjdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjdHgudHJhbnNpdGlvblRvKG5ldyBJZGxlU3RhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQm9vc3RlclRlbGVwb3J0Q2xpY2soY3R4OiBJSW5wdXRDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY3R4LnRyYW5zaXRpb25UbyhuZXcgSWRsZVN0YXRlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVsZXBvcnRTZWNvbmRQaWNrU3RhdGUgaW1wbGVtZW50cyBJSW5wdXRTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGFjdGl2ZUJvb3N0ZXIgPSBCb29zdGVyVHlwZS5UZWxlcG9ydDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpcnN0UGljazogR3JpZFBvc2l0aW9uKSB7fVxyXG5cclxuICAgIHB1YmxpYyBvbkNlbGxDbGljayhjdHg6IElJbnB1dENvbnRleHQsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmZpcnN0UGljaztcclxuXHJcbiAgICAgICAgaWYgKGEucm93ID09PSByb3cgJiYgYS5jb2wgPT09IGNvbCkge1xyXG4gICAgICAgICAgICBjdHguaGlnaGxpZ2h0VGlsZShhLnJvdywgYS5jb2wsIGZhbHNlKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zaXRpb25UbyhuZXcgVGVsZXBvcnRGaXJzdFBpY2tTdGF0ZSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LmNsZWFySGlnaGxpZ2h0cygpO1xyXG4gICAgICAgIGN0eC5leGVjdXRlVGVsZXBvcnRTd2FwKGEsIHsgcm93LCBjb2wgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQm9vc3RlckJvbWJDbGljayhjdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjdHguaGlnaGxpZ2h0VGlsZSh0aGlzLmZpcnN0UGljay5yb3csIHRoaXMuZmlyc3RQaWNrLmNvbCwgZmFsc2UpO1xyXG4gICAgICAgIGN0eC50cmFuc2l0aW9uVG8obmV3IElkbGVTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Cb29zdGVyVGVsZXBvcnRDbGljayhjdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjdHguaGlnaGxpZ2h0VGlsZSh0aGlzLmZpcnN0UGljay5yb3csIHRoaXMuZmlyc3RQaWNrLmNvbCwgZmFsc2UpO1xyXG4gICAgICAgIGN0eC50cmFuc2l0aW9uVG8obmV3IElkbGVTdGF0ZSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2tlZFN0YXRlIGltcGxlbWVudHMgSUlucHV0U3RhdGUge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBhY3RpdmVCb29zdGVyID0gQm9vc3RlclR5cGUuTm9uZTtcclxuXHJcbiAgICBwdWJsaWMgb25DZWxsQ2xpY2soX2N0eDogSUlucHV0Q29udGV4dCwgX3JvdzogbnVtYmVyLCBfY29sOiBudW1iZXIpOiB2b2lkIHt9XHJcbiAgICBwdWJsaWMgb25Cb29zdGVyQm9tYkNsaWNrKF9jdHg6IElJbnB1dENvbnRleHQpOiB2b2lkIHt9XHJcbiAgICBwdWJsaWMgb25Cb29zdGVyVGVsZXBvcnRDbGljayhfY3R4OiBJSW5wdXRDb250ZXh0KTogdm9pZCB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/rendering/TileRenderer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98278hJp1NFdagGRJep3W/c', 'TileRenderer');
// Scripts/rendering/TileRenderer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var TileRenderer = /** @class */ (function (_super) {
    __extends(TileRenderer, _super);
    function TileRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        return _this;
    }
    TileRenderer.prototype.init = function (spriteFrame) {
        this.sprite = this.getComponent(cc.Sprite) || this.addComponent(cc.Sprite);
        this.sprite.spriteFrame = spriteFrame;
    };
    TileRenderer.prototype.setSpriteFrame = function (sf) {
        if (this.sprite)
            this.sprite.spriteFrame = sf;
    };
    TileRenderer.prototype.playDestroy = function (dur) {
        var _this = this;
        return new Promise(function (resolve) {
            cc.tween(_this.node)
                .to(dur, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                .call(function () { return resolve(); })
                .start();
        });
    };
    TileRenderer.prototype.playSpawn = function (dur) {
        var _this = this;
        this.node.scale = 0;
        this.node.opacity = 255;
        return new Promise(function (resolve) {
            cc.tween(_this.node)
                .to(dur, { scale: 1 }, { easing: 'backOut' })
                .call(function () { return resolve(); })
                .start();
        });
    };
    TileRenderer.prototype.playFall = function (targetY, dur) {
        var _this = this;
        return new Promise(function (resolve) {
            cc.tween(_this.node)
                .to(dur, { y: targetY }, { easing: 'bounceOut' })
                .call(function () { return resolve(); })
                .start();
        });
    };
    TileRenderer.prototype.playMoveTo = function (target, dur) {
        var _this = this;
        return new Promise(function (resolve) {
            cc.tween(_this.node)
                .to(dur, { x: target.x, y: target.y }, { easing: 'sineInOut' })
                .call(function () { return resolve(); })
                .start();
        });
    };
    TileRenderer.prototype.setHighlight = function (on) {
        cc.Tween.stopAllByTarget(this.node);
        if (on) {
            cc.tween(this.node)
                .repeatForever(cc.tween()
                .to(0.25, { scale: 1.15 })
                .to(0.25, { scale: 1.0 }))
                .start();
        }
        else {
            this.node.scale = 1.0;
        }
    };
    TileRenderer = __decorate([
        ccclass
    ], TileRenderer);
    return TileRenderer;
}(cc.Component));
exports.default = TileRenderer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccmVuZGVyaW5nXFxUaWxlUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpRUM7UUEvRFcsWUFBTSxHQUFxQixJQUFJLENBQUM7O0lBK0Q1QyxDQUFDO0lBN0RVLDJCQUFJLEdBQVgsVUFBWSxXQUEyQjtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBRU0scUNBQWMsR0FBckIsVUFBc0IsRUFBa0I7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sa0NBQVcsR0FBbEIsVUFBbUIsR0FBVztRQUE5QixpQkFPQztRQU5HLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQSxPQUFPO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztpQkFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQ3ZELElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDO2lCQUNyQixLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixHQUFXO1FBQTVCLGlCQVNDO1FBUkcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixPQUFPLElBQUksT0FBTyxDQUFPLFVBQUEsT0FBTztZQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFDNUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLENBQUM7aUJBQ3JCLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLCtCQUFRLEdBQWYsVUFBZ0IsT0FBZSxFQUFFLEdBQVc7UUFBNUMsaUJBT0M7UUFORyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUEsT0FBTztZQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDaEQsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLENBQUM7aUJBQ3JCLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGlDQUFVLEdBQWpCLFVBQWtCLE1BQWUsRUFBRSxHQUFXO1FBQTlDLGlCQU9DO1FBTkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFBLE9BQU87WUFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUM5RCxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsQ0FBQztpQkFDckIsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sbUNBQVksR0FBbkIsVUFBb0IsRUFBVztRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxFQUFFLEVBQUU7WUFDSixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7aUJBQ0wsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDekIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNoQztpQkFDQSxLQUFLLEVBQUUsQ0FBQztTQUNoQjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQWhFZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlFaEM7SUFBRCxtQkFBQztDQWpFRCxBQWlFQyxDQWpFeUMsRUFBRSxDQUFDLFNBQVMsR0FpRXJEO2tCQWpFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVSZW5kZXJlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzcHJpdGU6IGNjLlNwcml0ZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSB8fCB0aGlzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwcml0ZUZyYW1lKHNmOiBjYy5TcHJpdGVGcmFtZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZSkgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBzZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheURlc3Ryb3koZHVyOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50byhkdXIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdiYWNrSW4nIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheVNwYXduKGR1cjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlICAgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKGR1ciwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUZhbGwodGFyZ2V0WTogbnVtYmVyLCBkdXI6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKGR1ciwgeyB5OiB0YXJnZXRZIH0sIHsgZWFzaW5nOiAnYm91bmNlT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gcmVzb2x2ZSgpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlNb3ZlVG8odGFyZ2V0OiBjYy5WZWMyLCBkdXI6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKGR1ciwgeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGlnaGxpZ2h0KG9uOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgaWYgKG9uKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgc2NhbGU6IDEuMTUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgc2NhbGU6IDEuMCB9KSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/config/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19cbcIaoPZEg7a03gGvpJ8L', 'GameConfig');
// Scripts/config/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameConfig = void 0;
exports.GameConfig = {
    GRID_ROWS: 8,
    GRID_COLS: 8,
    TILE_COLOR_COUNT: 5,
    TARGET_SCORE: 1000,
    MAX_MOVES: 25,
    MIN_GROUP_SIZE: 2,
    MAX_SHUFFLES: 3,
    BASE_POINTS_PER_TILE: 10,
    SUPER_TILE_THRESHOLD: 5,
    SUPER_ROW_CLEAR_MIN: 5,
    SUPER_COL_CLEAR_MIN: 7,
    SUPER_RADIUS_BOMB_MIN: 9,
    SUPER_FIELD_CLEAR_MIN: 12,
    SUPER_BOMB_RADIUS: 2,
    BOMB_RADIUS: 2,
    INITIAL_BOMB_COUNT: 3,
    INITIAL_TELEPORT_COUNT: 3,
    TILE_WIDTH: 100,
    TILE_HEIGHT: 112,
    CELL_GAP: 4,
    DESTROY_DURATION: 0.20,
    FALL_DURATION_PER_CELL: 0.06,
    SPAWN_DURATION: 0.15,
    SWAP_DURATION: 0.25,
    SHUFFLE_HALF_DURATION: 0.20,
    DISMISS_DURATION: 0.20,
    BOMB_WAVE_DELAY_PER_DIST: 0.04,
    BOMB_FLASH_DURATION: 0.10,
    BOMB_SHRINK_DURATION: 0.18,
    BOMB_FLASH_SCALE: 1.45,
    CASCADE_COL_DELAY: 0.07,
    CASCADE_ROW_DELAY: 0.035,
    CASCADE_FALL_DURATION: 0.35,
    CASCADE_START_OFFSET_Y: 400,
    LINE_SWEEP_DELAY_PER_CELL: 0.035,
    LINE_BEAM_EXPAND_DUR: 0.15,
    LINE_BEAM_FADE_DUR: 0.25,
    LINE_STRETCH_DUR: 0.09,
    LINE_SHRINK_DUR: 0.14,
    LINE_BEAM_HEIGHT: 10,
    FIELD_CLEAR_DELAY_PER_DIST: 0.03,
    FIELD_CLEAR_FLASH_DUR: 0.10,
    FIELD_CLEAR_SHRINK_DUR: 0.20,
    SCORE_POPUP_FONT_SIZE: 44,
    SCORE_POPUP_FLOAT_Y: 110,
    SCORE_POPUP_GROW_DURATION: 0.15,
    SCORE_POPUP_FLOAT_DURATION: 0.55,
    SCORE_COUNTER_DURATION: 0.45,
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29uZmlnXFxHYW1lQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsVUFBVSxHQUFHO0lBRXRCLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLENBQUM7SUFDWixnQkFBZ0IsRUFBRSxDQUFDO0lBRW5CLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsY0FBYyxFQUFFLENBQUM7SUFDakIsWUFBWSxFQUFFLENBQUM7SUFFZixvQkFBb0IsRUFBRSxFQUFFO0lBRXhCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLHFCQUFxQixFQUFFLENBQUM7SUFDeEIscUJBQXFCLEVBQUUsRUFBRTtJQUN6QixpQkFBaUIsRUFBRSxDQUFDO0lBRXBCLFdBQVcsRUFBRSxDQUFDO0lBQ2Qsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixzQkFBc0IsRUFBRSxDQUFDO0lBRXpCLFVBQVUsRUFBRSxHQUFHO0lBQ2YsV0FBVyxFQUFFLEdBQUc7SUFDaEIsUUFBUSxFQUFFLENBQUM7SUFFWCxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLHNCQUFzQixFQUFFLElBQUk7SUFDNUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsYUFBYSxFQUFFLElBQUk7SUFDbkIscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixnQkFBZ0IsRUFBRSxJQUFJO0lBRXRCLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsbUJBQW1CLEVBQUUsSUFBSTtJQUN6QixvQkFBb0IsRUFBRSxJQUFJO0lBQzFCLGdCQUFnQixFQUFFLElBQUk7SUFFdEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLHFCQUFxQixFQUFFLElBQUk7SUFDM0Isc0JBQXNCLEVBQUUsR0FBRztJQUUzQix5QkFBeUIsRUFBRSxLQUFLO0lBQ2hDLG9CQUFvQixFQUFFLElBQUk7SUFDMUIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGdCQUFnQixFQUFFLEVBQUU7SUFFcEIsMEJBQTBCLEVBQUUsSUFBSTtJQUNoQyxxQkFBcUIsRUFBRSxJQUFJO0lBQzNCLHNCQUFzQixFQUFFLElBQUk7SUFFNUIscUJBQXFCLEVBQUUsRUFBRTtJQUN6QixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHlCQUF5QixFQUFFLElBQUk7SUFDL0IsMEJBQTBCLEVBQUUsSUFBSTtJQUVoQyxzQkFBc0IsRUFBRSxJQUFJO0NBRXRCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR2FtZUNvbmZpZyA9IHtcclxuXHJcbiAgICBHUklEX1JPV1M6IDgsXHJcbiAgICBHUklEX0NPTFM6IDgsXHJcbiAgICBUSUxFX0NPTE9SX0NPVU5UOiA1LFxyXG5cclxuICAgIFRBUkdFVF9TQ09SRTogMTAwMCxcclxuICAgIE1BWF9NT1ZFUzogMjUsXHJcbiAgICBNSU5fR1JPVVBfU0laRTogMixcclxuICAgIE1BWF9TSFVGRkxFUzogMyxcclxuXHJcbiAgICBCQVNFX1BPSU5UU19QRVJfVElMRTogMTAsXHJcblxyXG4gICAgU1VQRVJfVElMRV9USFJFU0hPTEQ6IDUsXHJcbiAgICBTVVBFUl9ST1dfQ0xFQVJfTUlOOiA1LFxyXG4gICAgU1VQRVJfQ09MX0NMRUFSX01JTjogNyxcclxuICAgIFNVUEVSX1JBRElVU19CT01CX01JTjogOSxcclxuICAgIFNVUEVSX0ZJRUxEX0NMRUFSX01JTjogMTIsXHJcbiAgICBTVVBFUl9CT01CX1JBRElVUzogMixcclxuXHJcbiAgICBCT01CX1JBRElVUzogMixcclxuICAgIElOSVRJQUxfQk9NQl9DT1VOVDogMyxcclxuICAgIElOSVRJQUxfVEVMRVBPUlRfQ09VTlQ6IDMsXHJcblxyXG4gICAgVElMRV9XSURUSDogMTAwLFxyXG4gICAgVElMRV9IRUlHSFQ6IDExMixcclxuICAgIENFTExfR0FQOiA0LFxyXG5cclxuICAgIERFU1RST1lfRFVSQVRJT046IDAuMjAsXHJcbiAgICBGQUxMX0RVUkFUSU9OX1BFUl9DRUxMOiAwLjA2LFxyXG4gICAgU1BBV05fRFVSQVRJT046IDAuMTUsXHJcbiAgICBTV0FQX0RVUkFUSU9OOiAwLjI1LFxyXG4gICAgU0hVRkZMRV9IQUxGX0RVUkFUSU9OOiAwLjIwLFxyXG4gICAgRElTTUlTU19EVVJBVElPTjogMC4yMCxcclxuXHJcbiAgICBCT01CX1dBVkVfREVMQVlfUEVSX0RJU1Q6IDAuMDQsXHJcbiAgICBCT01CX0ZMQVNIX0RVUkFUSU9OOiAwLjEwLFxyXG4gICAgQk9NQl9TSFJJTktfRFVSQVRJT046IDAuMTgsXHJcbiAgICBCT01CX0ZMQVNIX1NDQUxFOiAxLjQ1LFxyXG5cclxuICAgIENBU0NBREVfQ09MX0RFTEFZOiAwLjA3LFxyXG4gICAgQ0FTQ0FERV9ST1dfREVMQVk6IDAuMDM1LFxyXG4gICAgQ0FTQ0FERV9GQUxMX0RVUkFUSU9OOiAwLjM1LFxyXG4gICAgQ0FTQ0FERV9TVEFSVF9PRkZTRVRfWTogNDAwLFxyXG5cclxuICAgIExJTkVfU1dFRVBfREVMQVlfUEVSX0NFTEw6IDAuMDM1LFxyXG4gICAgTElORV9CRUFNX0VYUEFORF9EVVI6IDAuMTUsXHJcbiAgICBMSU5FX0JFQU1fRkFERV9EVVI6IDAuMjUsXHJcbiAgICBMSU5FX1NUUkVUQ0hfRFVSOiAwLjA5LFxyXG4gICAgTElORV9TSFJJTktfRFVSOiAwLjE0LFxyXG4gICAgTElORV9CRUFNX0hFSUdIVDogMTAsXHJcblxyXG4gICAgRklFTERfQ0xFQVJfREVMQVlfUEVSX0RJU1Q6IDAuMDMsXHJcbiAgICBGSUVMRF9DTEVBUl9GTEFTSF9EVVI6IDAuMTAsXHJcbiAgICBGSUVMRF9DTEVBUl9TSFJJTktfRFVSOiAwLjIwLFxyXG5cclxuICAgIFNDT1JFX1BPUFVQX0ZPTlRfU0laRTogNDQsXHJcbiAgICBTQ09SRV9QT1BVUF9GTE9BVF9ZOiAxMTAsXHJcbiAgICBTQ09SRV9QT1BVUF9HUk9XX0RVUkFUSU9OOiAwLjE1LFxyXG4gICAgU0NPUkVfUE9QVVBfRkxPQVRfRFVSQVRJT046IDAuNTUsXHJcblxyXG4gICAgU0NPUkVfQ09VTlRFUl9EVVJBVElPTjogMC40NSxcclxuXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/rendering/ResultPopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b637uVQwdFa4sG14KQujcf', 'ResultPopup');
// Scripts/rendering/ResultPopup.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultPopup = void 0;
var ResultPopup = /** @class */ (function () {
    function ResultPopup(parent, font) {
        this.parent = parent;
        this.font = font;
    }
    ResultPopup.prototype.show = function (isWin, score, targetScore, onRestart) {
        var overlay = this.createOverlay();
        this.addTitle(overlay, isWin);
        this.addScoreLabel(overlay, score, targetScore);
        this.addRestartButton(overlay, isWin, onRestart);
        if (isWin)
            this.spawnConfetti(overlay);
    };
    ResultPopup.prototype.createOverlay = function () {
        var W = this.parent.width;
        var H = this.parent.height;
        var overlay = new cc.Node('ResultOverlay');
        overlay.parent = this.parent;
        overlay.setContentSize(W, H);
        overlay.setPosition(0, 0);
        overlay.opacity = 0;
        var bg = overlay.addComponent(cc.Graphics);
        bg.fillColor = new cc.Color(0, 0, 0, 180);
        bg.rect(-W / 2, -H / 2, W, H);
        bg.fill();
        overlay.on(cc.Node.EventType.TOUCH_START, function (e) { return e.stopPropagation(); });
        overlay.on(cc.Node.EventType.TOUCH_END, function (e) { return e.stopPropagation(); });
        cc.tween(overlay).to(0.35, { opacity: 255 }).start();
        return overlay;
    };
    ResultPopup.prototype.addTitle = function (overlay, isWin) {
        var title = this.makeLabel(overlay, 0, 350, isWin ? 'ПОБЕДА!' : 'ПОРАЖЕНИЕ!', 80);
        title.color = isWin ? cc.color(255, 220, 50) : cc.color(255, 80, 80);
        title.scale = 0;
        cc.tween(title)
            .delay(0.15)
            .to(0.45, { scale: 1.15, y: 130 }, { easing: 'backOut' })
            .to(0.12, { scale: 1.0 }, { easing: 'sineInOut' })
            .start();
        if (isWin) {
            cc.tween(title)
                .delay(0.75)
                .repeatForever(cc.tween()
                .to(0.8, { scale: 1.06 }, { easing: 'sineInOut' })
                .to(0.8, { scale: 1.0 }, { easing: 'sineInOut' }))
                .start();
        }
    };
    ResultPopup.prototype.addScoreLabel = function (overlay, score, targetScore) {
        var scoreNode = this.makeLabel(overlay, 0, 20, "\u041E\u0447\u043A\u0438: " + score + " / " + targetScore, 50);
        scoreNode.scale = 0;
        scoreNode.opacity = 0;
        cc.tween(scoreNode)
            .delay(0.50)
            .to(0.35, { scale: 1, opacity: 255 }, { easing: 'backOut' })
            .start();
    };
    ResultPopup.prototype.addRestartButton = function (overlay, isWin, onRestart) {
        var btn = new cc.Node('RestartBtn');
        btn.parent = overlay;
        btn.setPosition(0, -280);
        btn.setContentSize(340, 90);
        btn.setAnchorPoint(0.5, 0.5);
        btn.scale = 0;
        var g = btn.addComponent(cc.Graphics);
        g.fillColor = isWin ? new cc.Color(60, 170, 60) : new cc.Color(170, 60, 60);
        g.roundRect(-170, -45, 340, 90, 16);
        g.fill();
        this.makeLabel(btn, 0, 0, 'ЗАНОВО', 52);
        cc.tween(btn)
            .delay(0.70)
            .to(0.40, { scale: 1, y: -100 }, { easing: 'backOut' })
            .start();
        btn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.tween(overlay)
                .to(0.2, { opacity: 0, scale: 0.9 })
                .call(function () { overlay.destroy(); onRestart(); })
                .start();
        });
    };
    ResultPopup.prototype.spawnConfetti = function (parent) {
        var palette = [
            cc.color(255, 220, 50),
            cc.color(255, 100, 40),
            cc.color(80, 210, 255),
            cc.color(255, 70, 170),
            cc.color(100, 255, 100),
            cc.color(200, 130, 255),
        ];
        var COUNT = 24;
        var _loop_1 = function (i) {
            var spark = new cc.Node('Confetti');
            spark.parent = parent;
            spark.setPosition(0, 130);
            spark.scale = 0;
            spark.opacity = 255;
            var sz = 8 + Math.random() * 8;
            var gfx = spark.addComponent(cc.Graphics);
            gfx.fillColor = palette[i % palette.length];
            gfx.roundRect(-sz / 2, -sz / 2, sz, sz, 2);
            gfx.fill();
            var angle = (Math.PI * 2 * i) / COUNT + (Math.random() - 0.5) * 0.4;
            var radius = 220 + Math.random() * 260;
            var tx = Math.cos(angle) * radius;
            var ty = Math.sin(angle) * radius + 130;
            var delay = 0.35 + Math.random() * 0.25;
            var dur = 0.6 + Math.random() * 0.5;
            var spin = (Math.random() - 0.5) * 720;
            cc.tween(spark)
                .delay(delay)
                .to(0.08, { scale: 1 })
                .to(dur, {
                x: tx, y: ty,
                opacity: 0,
                scale: 0.2,
                angle: spin,
            }, { easing: 'sineOut' })
                .call(function () { return spark.destroy(); })
                .start();
        };
        for (var i = 0; i < COUNT; i++) {
            _loop_1(i);
        }
    };
    ResultPopup.prototype.makeLabel = function (parent, x, y, text, size) {
        var n = new cc.Node();
        n.parent = parent;
        n.setPosition(x, y);
        var l = n.addComponent(cc.Label);
        l.string = text;
        l.fontSize = size;
        l.lineHeight = size + 10;
        l.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        l.verticalAlign = cc.Label.VerticalAlign.CENTER;
        if (this.font) {
            l.font = this.font;
            l.useSystemFont = false;
        }
        n.color = cc.Color.WHITE;
        return n;
    };
    return ResultPopup;
}());
exports.ResultPopup = ResultPopup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccmVuZGVyaW5nXFxSZXN1bHRQb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVJLHFCQUNxQixNQUFlLEVBQ2YsSUFBc0I7UUFEdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLFNBQUksR0FBSixJQUFJLENBQWtCO0lBQ3hDLENBQUM7SUFFRywwQkFBSSxHQUFYLFVBQ0ksS0FBYyxFQUNkLEtBQWEsRUFDYixXQUFtQixFQUNuQixTQUFxQjtRQUVyQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWpELElBQUksS0FBSztZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLG1DQUFhLEdBQXJCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsT0FB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QUFDLEVBQUU7b0JBQXJCLENBQUM7U0FnQ1Q7SUFDTCxDQUFDO0lBRU8sK0JBQVMsR0FBakIsVUFBa0IsTUFBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDL0UsSUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBTSxDQUFDLEdBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLE1BQU0sR0FBTyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxDQUFDLFFBQVEsR0FBSyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxhQUFhLEdBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLENBQUMsQ0FBQyxJQUFJLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUVELENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQTlLQSxBQThLQyxJQUFBO0FBOUtZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc3VsdFBvcHVwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogY2MuTm9kZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZvbnQ6ICAgY2MuRm9udCB8IG51bGwsXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIHNob3coXHJcbiAgICAgICAgaXNXaW46IGJvb2xlYW4sXHJcbiAgICAgICAgc2NvcmU6IG51bWJlcixcclxuICAgICAgICB0YXJnZXRTY29yZTogbnVtYmVyLFxyXG4gICAgICAgIG9uUmVzdGFydDogKCkgPT4gdm9pZCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUaXRsZShvdmVybGF5LCBpc1dpbik7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZUxhYmVsKG92ZXJsYXksIHNjb3JlLCB0YXJnZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN0YXJ0QnV0dG9uKG92ZXJsYXksIGlzV2luLCBvblJlc3RhcnQpO1xyXG5cclxuICAgICAgICBpZiAoaXNXaW4pIHRoaXMuc3Bhd25Db25mZXR0aShvdmVybGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgY29uc3QgVyA9IHRoaXMucGFyZW50LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IEggPSB0aGlzLnBhcmVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgY2MuTm9kZSgnUmVzdWx0T3ZlcmxheScpO1xyXG4gICAgICAgIG92ZXJsYXkucGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgb3ZlcmxheS5zZXRDb250ZW50U2l6ZShXLCBIKTtcclxuICAgICAgICBvdmVybGF5LnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIG92ZXJsYXkub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGJnID0gb3ZlcmxheS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGJnLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAxODApO1xyXG4gICAgICAgIGJnLnJlY3QoLVcgLyAyLCAtSCAvIDIsIFcsIEgpO1xyXG4gICAgICAgIGJnLmZpbGwoKTtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gICAgICAgIG92ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4ob3ZlcmxheSkudG8oMC4zNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gb3ZlcmxheTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRpdGxlKG92ZXJsYXk6IGNjLk5vZGUsIGlzV2luOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLm1ha2VMYWJlbChvdmVybGF5LCAwLCAzNTAsXHJcbiAgICAgICAgICAgIGlzV2luID8gJ9Cf0J7QkdCV0JTQkCEnIDogJ9Cf0J7QoNCQ0JbQldCd0JjQlSEnLCA4MCk7XHJcbiAgICAgICAgdGl0bGUuY29sb3IgPSBpc1dpbiA/IGNjLmNvbG9yKDI1NSwgMjIwLCA1MCkgOiBjYy5jb2xvcigyNTUsIDgwLCA4MCk7XHJcbiAgICAgICAgdGl0bGUuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aXRsZSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuMTUpXHJcbiAgICAgICAgICAgIC50bygwLjQ1LCB7IHNjYWxlOiAxLjE1LCB5OiAxMzAgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC4xMiwgeyBzY2FsZTogMS4wIH0sICAgICAgICAgIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGlzV2luKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRpdGxlKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuNzUpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgc2NhbGU6IDEuMDYgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgc2NhbGU6IDEuMCB9LCAgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkU2NvcmVMYWJlbChvdmVybGF5OiBjYy5Ob2RlLCBzY29yZTogbnVtYmVyLCB0YXJnZXRTY29yZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVOb2RlID0gdGhpcy5tYWtlTGFiZWwob3ZlcmxheSwgMCwgMjAsXHJcbiAgICAgICAgICAgIGDQntGH0LrQuDogJHtzY29yZX0gLyAke3RhcmdldFNjb3JlfWAsIDUwKTtcclxuICAgICAgICBzY29yZU5vZGUuc2NhbGUgICA9IDA7XHJcbiAgICAgICAgc2NvcmVOb2RlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICBjYy50d2VlbihzY29yZU5vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUwKVxyXG4gICAgICAgICAgICAudG8oMC4zNSwgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRSZXN0YXJ0QnV0dG9uKG92ZXJsYXk6IGNjLk5vZGUsIGlzV2luOiBib29sZWFuLCBvblJlc3RhcnQ6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBidG4gPSBuZXcgY2MuTm9kZSgnUmVzdGFydEJ0bicpO1xyXG4gICAgICAgIGJ0bi5wYXJlbnQgPSBvdmVybGF5O1xyXG4gICAgICAgIGJ0bi5zZXRQb3NpdGlvbigwLCAtMjgwKTtcclxuICAgICAgICBidG4uc2V0Q29udGVudFNpemUoMzQwLCA5MCk7XHJcbiAgICAgICAgYnRuLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcclxuICAgICAgICBidG4uc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBnID0gYnRuLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgZy5maWxsQ29sb3IgPSBpc1dpbiA/IG5ldyBjYy5Db2xvcig2MCwgMTcwLCA2MCkgOiBuZXcgY2MuQ29sb3IoMTcwLCA2MCwgNjApO1xyXG4gICAgICAgIGcucm91bmRSZWN0KC0xNzAsIC00NSwgMzQwLCA5MCwgMTYpO1xyXG4gICAgICAgIGcuZmlsbCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VMYWJlbChidG4sIDAsIDAsICfQl9CQ0J3QntCS0J4nLCA1Mik7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgICAgLmRlbGF5KDAuNzApXHJcbiAgICAgICAgICAgIC50bygwLjQwLCB7IHNjYWxlOiAxLCB5OiAtMTAwIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4ob3ZlcmxheSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBvdmVybGF5LmRlc3Ryb3koKTsgb25SZXN0YXJ0KCk7IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduQ29uZmV0dGkocGFyZW50OiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcGFsZXR0ZSA9IFtcclxuICAgICAgICAgICAgY2MuY29sb3IoMjU1LCAyMjAsIDUwKSxcclxuICAgICAgICAgICAgY2MuY29sb3IoMjU1LCAxMDAsIDQwKSxcclxuICAgICAgICAgICAgY2MuY29sb3IoODAsICAyMTAsIDI1NSksXHJcbiAgICAgICAgICAgIGNjLmNvbG9yKDI1NSwgNzAsICAxNzApLFxyXG4gICAgICAgICAgICBjYy5jb2xvcigxMDAsIDI1NSwgMTAwKSxcclxuICAgICAgICAgICAgY2MuY29sb3IoMjAwLCAxMzAsIDI1NSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgQ09VTlQgPSAyNDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BhcmsgPSBuZXcgY2MuTm9kZSgnQ29uZmV0dGknKTtcclxuICAgICAgICAgICAgc3BhcmsucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBzcGFyay5zZXRQb3NpdGlvbigwLCAxMzApO1xyXG4gICAgICAgICAgICBzcGFyay5zY2FsZSAgID0gMDtcclxuICAgICAgICAgICAgc3Bhcmsub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN6ICA9IDggKyBNYXRoLnJhbmRvbSgpICogODtcclxuICAgICAgICAgICAgY29uc3QgZ2Z4ID0gc3BhcmsuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICAgICAgZ2Z4LmZpbGxDb2xvciA9IHBhbGV0dGVbaSAlIHBhbGV0dGUubGVuZ3RoXTtcclxuICAgICAgICAgICAgZ2Z4LnJvdW5kUmVjdCgtc3ogLyAyLCAtc3ogLyAyLCBzeiwgc3osIDIpO1xyXG4gICAgICAgICAgICBnZnguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgID0gKE1hdGguUEkgKiAyICogaSkgLyBDT1VOVCArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuNDtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMjIwICsgTWF0aC5yYW5kb20oKSAqIDI2MDtcclxuICAgICAgICAgICAgY29uc3QgdHggICAgID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xyXG4gICAgICAgICAgICBjb25zdCB0eSAgICAgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMgKyAxMzA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ICA9IDAuMzUgKyBNYXRoLnJhbmRvbSgpICogMC4yNTtcclxuICAgICAgICAgICAgY29uc3QgZHVyICAgID0gMC42ICArIE1hdGgucmFuZG9tKCkgKiAwLjU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwaW4gICA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDcyMDtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHNwYXJrKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDgsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgICAgIC50byhkdXIsIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0eCwgeTogdHksXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC4yLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiBzcGluLFxyXG4gICAgICAgICAgICAgICAgfSBhcyBhbnksIHsgZWFzaW5nOiAnc2luZU91dCcgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHNwYXJrLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VMYWJlbChwYXJlbnQ6IGNjLk5vZGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHNpemU6IG51bWJlcik6IGNjLk5vZGUge1xyXG4gICAgICAgIGNvbnN0IG4gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG4ucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIG4uc2V0UG9zaXRpb24oeCwgeSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGwgICAgICA9IG4uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsLnN0cmluZyAgICAgPSB0ZXh0O1xyXG4gICAgICAgIGwuZm9udFNpemUgICA9IHNpemU7XHJcbiAgICAgICAgbC5saW5lSGVpZ2h0ID0gc2l6ZSArIDEwO1xyXG4gICAgICAgIGwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICBsLnZlcnRpY2FsQWxpZ24gICA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb250KSB7XHJcbiAgICAgICAgICAgIGwuZm9udCAgICAgICAgICA9IHRoaXMuZm9udDtcclxuICAgICAgICAgICAgbC51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
