"use strict";
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