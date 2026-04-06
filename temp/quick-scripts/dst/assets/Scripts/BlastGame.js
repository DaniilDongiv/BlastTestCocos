
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