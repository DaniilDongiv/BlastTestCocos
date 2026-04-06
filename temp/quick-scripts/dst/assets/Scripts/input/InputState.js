
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