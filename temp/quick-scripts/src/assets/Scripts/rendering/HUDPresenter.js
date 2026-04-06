"use strict";
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