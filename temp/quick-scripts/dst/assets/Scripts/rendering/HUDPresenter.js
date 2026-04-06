
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccmVuZGVyaW5nXFxIVURQcmVzZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHVDQUE0QztBQUU1QztJQWNJLHNCQUNxQixVQUE4QixFQUM5QixVQUE4QixFQUM5QixTQUE4QixFQUM5QixhQUE4QixFQUMvQyxJQUFjO1FBSkcsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBaEIzQyxjQUFTLEdBQW9CLElBQUksQ0FBQztRQUNsQyxjQUFTLEdBQW9CLElBQUksQ0FBQztRQUNsQyx1QkFBa0IsR0FBSSxDQUFDLENBQUM7UUFDeEIsdUJBQWtCLEdBQUksQ0FBQyxDQUFDO1FBRXhCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQU0sQ0FBQyxDQUFDO1FBQ25CLGNBQVMsR0FBUSxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBSyxDQUFDLENBQUM7UUFDbkIsa0JBQWEsR0FBSSxDQUFDLENBQUM7UUFDbkIsZ0JBQVcsR0FBTSxDQUFDLENBQUM7UUFTdkIsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sd0NBQWlCLEdBQXhCLFVBQXlCLFNBQXlCLEVBQUUsU0FBeUI7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDN0QsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFFaEYsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBTSxDQUFDLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakUsSUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQzlELENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxxQ0FBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2hDLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNO1lBQUUsT0FBTztRQUUxRSxJQUFJLENBQUMsU0FBUyxHQUFNLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBSSxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDekIsdUJBQVUsQ0FBQyxzQkFBc0IsRUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUM1QixDQUFDO0lBQ04sQ0FBQztJQUVNLGlDQUFVLEdBQWpCLFVBQWtCLFdBQW1CO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQVEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQU0sV0FBVyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx1Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBaUI7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLEtBQUssbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksS0FBSyxtQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLE9BQWUsRUFBRSxNQUFjO1FBQzNDLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxnQ0FBVSxPQUFPLFNBQUksTUFBUSxDQUFDO0lBQ2hGLENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFHLFNBQVcsQ0FBQztJQUNqRSxDQUFDO0lBRU0sbUNBQVksR0FBbkIsVUFBb0IsQ0FBUztRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBRyxDQUFHLENBQUM7SUFDdkQsQ0FBQztJQUVNLHVDQUFnQixHQUF2QixVQUF3QixDQUFTO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFHLENBQUcsQ0FBQztJQUMvRCxDQUFDO0lBRU8scUNBQWMsR0FBdEIsVUFBdUIsS0FBcUIsRUFBRSxTQUFpQixFQUFFLE1BQWU7UUFDNUUsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLElBQUksTUFBTSxFQUFFO1lBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1YsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7aUJBQ0wsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLEVBQUcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7aUJBQzlELEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFHLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQ3RFO2lCQUNBLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFTyxnQ0FBUyxHQUFqQixVQUFrQixJQUFhO1FBQzNCLElBQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RGLEtBQWdCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1lBQW5CLElBQU0sQ0FBQyxlQUFBO1lBQ1IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksR0FBWSxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBO0FBakhZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9HYW1lQ29uZmlnJztcclxuaW1wb3J0IHsgQm9vc3RlclR5cGUgfSBmcm9tICcuLi9jb3JlL1R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIVURQcmVzZW50ZXIge1xyXG5cclxuICAgIHByaXZhdGUgYm9tYlBhbmVsOiAgY2MuTm9kZSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0ZWxlUGFuZWw6ICBjYy5Ob2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJvbWJQYW5lbEJhc2VTY2FsZSAgPSAxO1xyXG4gICAgcHJpdmF0ZSB0ZWxlUGFuZWxCYXNlU2NhbGUgID0gMTtcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlRGlzcGxheWVkID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmVUYXJnZXQgICAgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZUZyb20gICAgICA9IDA7XHJcbiAgICBwcml2YXRlIHNjb3JlRWxhcHNlZCAgID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmVEdXJhdGlvbiAgPSAwO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXRTY29yZSAgICA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzY29yZUxhYmVsOiAgICBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtb3Zlc0xhYmVsOiAgICBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBib21iTGFiZWw6ICAgICBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZWxlcG9ydExhYmVsOiBjYy5MYWJlbCB8IG51bGwsXHJcbiAgICAgICAgZm9udD86IGNjLkZvbnQsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoZm9udCkgdGhpcy5hcHBseUZvbnQoZm9udCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRCb29zdGVyUGFuZWxzKGJvbWJQYW5lbDogY2MuTm9kZSB8IG51bGwsIHRlbGVQYW5lbDogY2MuTm9kZSB8IG51bGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvbWJQYW5lbCA9IGJvbWJQYW5lbDtcclxuICAgICAgICB0aGlzLnRlbGVQYW5lbCA9IHRlbGVQYW5lbDtcclxuICAgICAgICBpZiAoYm9tYlBhbmVsKSB0aGlzLmJvbWJQYW5lbEJhc2VTY2FsZSA9IGJvbWJQYW5lbC5zY2FsZTtcclxuICAgICAgICBpZiAodGVsZVBhbmVsKSB0aGlzLnRlbGVQYW5lbEJhc2VTY2FsZSA9IHRlbGVQYW5lbC5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zY29yZUR1cmF0aW9uIDw9IDAgfHwgdGhpcy5zY29yZURpc3BsYXllZCA9PT0gdGhpcy5zY29yZVRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlRWxhcHNlZCArPSBkdDtcclxuICAgICAgICBjb25zdCB0ICAgID0gTWF0aC5taW4oMSwgdGhpcy5zY29yZUVsYXBzZWQgLyB0aGlzLnNjb3JlRHVyYXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGVhc2UgPSAxIC0gTWF0aC5wb3coMSAtIHQsIDMpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ZWQgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlRnJvbSArICh0aGlzLnNjb3JlVGFyZ2V0IC0gdGhpcy5zY29yZUZyb20pICogZWFzZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U2NvcmUodGhpcy5zY29yZURpc3BsYXllZCwgdGhpcy50YXJnZXRTY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFuaW1hdGVTY29yZVRvKHRhcmdldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5zY29yZVRhcmdldCAmJiB0aGlzLnNjb3JlRGlzcGxheWVkID09PSB0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZUZyb20gICAgPSB0aGlzLnNjb3JlRGlzcGxheWVkO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUYXJnZXQgID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGFwc2VkID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRhcmdldCAtIHRoaXMuc2NvcmVGcm9tKTtcclxuICAgICAgICB0aGlzLnNjb3JlRHVyYXRpb24gPSBNYXRoLm1heChcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5TQ09SRV9DT1VOVEVSX0RVUkFUSU9OLFxyXG4gICAgICAgICAgICBNYXRoLm1pbigwLjksIGRpZmYgLyAzMDApLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0U2NvcmUodGFyZ2V0U2NvcmU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUYXJnZXQgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVGcm9tICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEdXJhdGlvbiAgPSAwO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0U2NvcmUgICAgPSB0YXJnZXRTY29yZTtcclxuICAgICAgICB0aGlzLnNldFNjb3JlKDAsIHRhcmdldFNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWN0aXZlQm9vc3Rlcih0eXBlOiBCb29zdGVyVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0UGFuZWxBY3RpdmUodGhpcy5ib21iUGFuZWwsIHRoaXMuYm9tYlBhbmVsQmFzZVNjYWxlLCB0eXBlID09PSBCb29zdGVyVHlwZS5Cb21iKTtcclxuICAgICAgICB0aGlzLnNldFBhbmVsQWN0aXZlKHRoaXMudGVsZVBhbmVsLCB0aGlzLnRlbGVQYW5lbEJhc2VTY2FsZSwgdHlwZSA9PT0gQm9vc3RlclR5cGUuVGVsZXBvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTY29yZShjdXJyZW50OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGDQntCn0JrQmDpcXG4ke2N1cnJlbnR9LyR7dGFyZ2V0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1vdmVzKHJlbWFpbmluZzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZXNMYWJlbCkgdGhpcy5tb3Zlc0xhYmVsLnN0cmluZyA9IGAke3JlbWFpbmluZ31gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRCb21iQ291bnQobjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYkxhYmVsKSB0aGlzLmJvbWJMYWJlbC5zdHJpbmcgPSBgJHtufWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRlbGVwb3J0Q291bnQobjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudGVsZXBvcnRMYWJlbCkgdGhpcy50ZWxlcG9ydExhYmVsLnN0cmluZyA9IGAke259YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBhbmVsQWN0aXZlKHBhbmVsOiBjYy5Ob2RlIHwgbnVsbCwgYmFzZVNjYWxlOiBudW1iZXIsIGFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICghcGFuZWwpIHJldHVybjtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocGFuZWwpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHBhbmVsKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zNSwgeyBzY2FsZTogYmFzZVNjYWxlICogMS4xIH0sICB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuOTUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFuZWwuc2NhbGUgPSBiYXNlU2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlGb250KGZvbnQ6IGNjLkZvbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbdGhpcy5zY29yZUxhYmVsLCB0aGlzLm1vdmVzTGFiZWwsIHRoaXMuYm9tYkxhYmVsLCB0aGlzLnRlbGVwb3J0TGFiZWxdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbCBvZiBsYWJlbHMpIHtcclxuICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgIGwuZm9udCAgICAgICAgICA9IGZvbnQ7XHJcbiAgICAgICAgICAgICAgICBsLnVzZVN5c3RlbUZvbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=