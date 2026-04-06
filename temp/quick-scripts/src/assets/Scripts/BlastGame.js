"use strict";
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