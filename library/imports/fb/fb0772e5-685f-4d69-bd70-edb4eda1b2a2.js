"use strict";
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