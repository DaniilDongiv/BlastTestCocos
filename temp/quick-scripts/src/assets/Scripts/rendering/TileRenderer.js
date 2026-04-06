"use strict";
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