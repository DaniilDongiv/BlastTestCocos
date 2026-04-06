"use strict";
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