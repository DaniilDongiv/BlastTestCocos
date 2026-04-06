
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