
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/rendering/FieldRenderer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fca13Je9dHpYdnvp1p5mhR', 'FieldRenderer');
// Scripts/rendering/FieldRenderer.ts

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
var TileRenderer_1 = require("./TileRenderer");
var GameConfig_1 = require("../config/GameConfig");
var Grid_1 = require("../core/Grid");
var Types_1 = require("../core/Types");
var ccclass = cc._decorator.ccclass;
var FieldRenderer = /** @class */ (function (_super) {
    __extends(FieldRenderer, _super);
    function FieldRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.effectAnimators = new Map();
        _this.nodes = Grid_1.Grid.filled(0, 0, null);
        _this.renderers = Grid_1.Grid.filled(0, 0, null);
        _this.colorSprites = [];
        _this.superSprites = new Map();
        _this.cellW = 0;
        _this.cellH = 0;
        _this.originX = 0;
        _this.originY = 0;
        _this.onCellClick = null;
        return _this;
    }
    FieldRenderer.prototype.init = function (rows, cols, colorSprites, superSprites, onClick) {
        this.colorSprites = colorSprites;
        this.superSprites = superSprites;
        this.onCellClick = onClick;
        this.cellW = GameConfig_1.GameConfig.TILE_WIDTH + GameConfig_1.GameConfig.CELL_GAP;
        this.cellH = GameConfig_1.GameConfig.TILE_HEIGHT + GameConfig_1.GameConfig.CELL_GAP;
        var gridW = cols * this.cellW - GameConfig_1.GameConfig.CELL_GAP;
        var gridH = rows * this.cellH - GameConfig_1.GameConfig.CELL_GAP;
        this.originX = -gridW / 2 + GameConfig_1.GameConfig.TILE_WIDTH / 2;
        this.originY = -gridH / 2 + GameConfig_1.GameConfig.TILE_HEIGHT / 2;
        this.nodes = Grid_1.Grid.filled(rows, cols, null);
        this.renderers = Grid_1.Grid.filled(rows, cols, null);
        this.initEffectAnimators();
        this.node.on(cc.Node.EventType.TOUCH_END, this.handleTouch, this);
    };
    FieldRenderer.prototype.initEffectAnimators = function () {
        var _this = this;
        this.effectAnimators.set(Types_1.SuperTileType.RowClear, function (c, p) { return _this.animateRowClear(c, p); });
        this.effectAnimators.set(Types_1.SuperTileType.ColumnClear, function (c, p) { return _this.animateColumnClear(c, p); });
        this.effectAnimators.set(Types_1.SuperTileType.RadiusBomb, function (c, p) { return _this.animateBombBlast(c, p); });
        this.effectAnimators.set(Types_1.SuperTileType.FieldClear, function (c, p) { return _this.animateFieldClear(c, p); });
    };
    FieldRenderer.prototype.animateSuperEffect = function (type, center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var animator;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        animator = this.effectAnimators.get(type);
                        if (!animator) return [3 /*break*/, 2];
                        return [4 /*yield*/, animator(center, positions)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.animateDestroy(positions)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.cellPos = function (row, col) {
        return cc.v2(this.originX + col * this.cellW, this.originY + row * this.cellH);
    };
    FieldRenderer.prototype.createAllTiles = function (grid) {
        var _this = this;
        grid.forEach(function (cell, r, c) {
            if (cell)
                _this.makeTile(r, c, cell);
        });
    };
    FieldRenderer.prototype.clearAllTiles = function () {
        var _a = this.nodes, rows = _a.rows, cols = _a.cols;
        for (var r = 0; r < rows; r++)
            for (var c = 0; c < cols; c++)
                this.killTile(r, c);
    };
    FieldRenderer.prototype.placeSuperTile = function (row, col, cell) {
        this.killTile(row, col);
        this.makeTile(row, col, cell);
    };
    FieldRenderer.prototype.rebuildInstant = function (grid) {
        this.clearAllTiles();
        this.createAllTiles(grid);
    };
    FieldRenderer.prototype.animateDestroy = function (positions) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks, _i, positions_1, pos, r, _a, positions_2, pos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tasks = [];
                        for (_i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
                            pos = positions_1[_i];
                            r = this.renderers.get(pos.row, pos.col);
                            if (r)
                                tasks.push(r.playDestroy(GameConfig_1.GameConfig.DESTROY_DURATION));
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        for (_a = 0, positions_2 = positions; _a < positions_2.length; _a++) {
                            pos = positions_2[_a];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateBombBlast = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var waveDelay, flashDur, shrinkDur, flashScale, tasks, _loop_1, this_1, _i, positions_3, pos, _a, positions_4, pos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        waveDelay = GameConfig_1.GameConfig.BOMB_WAVE_DELAY_PER_DIST;
                        flashDur = GameConfig_1.GameConfig.BOMB_FLASH_DURATION;
                        shrinkDur = GameConfig_1.GameConfig.BOMB_SHRINK_DURATION;
                        flashScale = GameConfig_1.GameConfig.BOMB_FLASH_SCALE;
                        tasks = [];
                        _loop_1 = function (pos) {
                            var n = this_1.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.row - center.row) + Math.abs(pos.col - center.col);
                            var delay = dist * waveDelay;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(flashDur, { scale: flashScale }, { easing: 'backOut' })
                                    .to(shrinkDur, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_1 = this;
                        for (_i = 0, positions_3 = positions; _i < positions_3.length; _i++) {
                            pos = positions_3[_i];
                            _loop_1(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        for (_a = 0, positions_4 = positions; _a < positions_4.length; _a++) {
                            pos = positions_4[_a];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateRowClear = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var cfg, _a, rows, cols, beamY, fullW, tasks, _loop_2, this_2, _i, positions_5, pos, _b, positions_6, pos;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cfg = GameConfig_1.GameConfig;
                        _a = this.nodes, rows = _a.rows, cols = _a.cols;
                        beamY = this.cellPos(center.row, 0).y;
                        fullW = cols * this.cellW + cfg.TILE_WIDTH;
                        this.makeBeam(0, beamY, fullW, cfg.LINE_BEAM_HEIGHT, true);
                        tasks = [];
                        _loop_2 = function (pos) {
                            var n = this_2.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.col - center.col);
                            var delay = dist * cfg.LINE_SWEEP_DELAY_PER_CELL;
                            var dir = pos.col >= center.col ? 1 : -1;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(cfg.LINE_STRETCH_DUR, { scaleX: 1.5, scaleY: 0.55 }, { easing: 'backOut' })
                                    .to(cfg.LINE_SHRINK_DUR, { scale: 0, opacity: 0, angle: 20 * dir }, { easing: 'sineIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_2 = this;
                        for (_i = 0, positions_5 = positions; _i < positions_5.length; _i++) {
                            pos = positions_5[_i];
                            _loop_2(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _c.sent();
                        for (_b = 0, positions_6 = positions; _b < positions_6.length; _b++) {
                            pos = positions_6[_b];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateColumnClear = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var cfg, _a, rows, cols, beamX, fullH, tasks, _loop_3, this_3, _i, positions_7, pos, _b, positions_8, pos;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cfg = GameConfig_1.GameConfig;
                        _a = this.nodes, rows = _a.rows, cols = _a.cols;
                        beamX = this.cellPos(0, center.col).x;
                        fullH = rows * this.cellH + cfg.TILE_HEIGHT;
                        this.makeBeam(beamX, 0, cfg.LINE_BEAM_HEIGHT, fullH, false);
                        tasks = [];
                        _loop_3 = function (pos) {
                            var n = this_3.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.row - center.row);
                            var delay = dist * cfg.LINE_SWEEP_DELAY_PER_CELL;
                            var dir = pos.row >= center.row ? 1 : -1;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(cfg.LINE_STRETCH_DUR, { scaleX: 0.55, scaleY: 1.5 }, { easing: 'backOut' })
                                    .to(cfg.LINE_SHRINK_DUR, { scale: 0, opacity: 0, angle: 20 * dir }, { easing: 'sineIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_3 = this;
                        for (_i = 0, positions_7 = positions; _i < positions_7.length; _i++) {
                            pos = positions_7[_i];
                            _loop_3(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _c.sent();
                        for (_b = 0, positions_8 = positions; _b < positions_8.length; _b++) {
                            pos = positions_8[_b];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateFieldClear = function (center, positions) {
        return __awaiter(this, void 0, Promise, function () {
            var cfg, tasks, _loop_4, this_4, _i, positions_9, pos, _a, positions_10, pos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cfg = GameConfig_1.GameConfig;
                        tasks = [];
                        _loop_4 = function (pos) {
                            var n = this_4.nodes.get(pos.row, pos.col);
                            if (!n)
                                return "continue";
                            var dist = Math.abs(pos.row - center.row) + Math.abs(pos.col - center.col);
                            var delay = dist * cfg.FIELD_CLEAR_DELAY_PER_DIST;
                            tasks.push(new Promise(function (resolve) {
                                cc.tween(n)
                                    .delay(delay)
                                    .to(cfg.FIELD_CLEAR_FLASH_DUR, { scale: 1.35 }, { easing: 'backOut' })
                                    .to(cfg.FIELD_CLEAR_SHRINK_DUR, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                                    .call(function () { return resolve(); })
                                    .start();
                            }));
                        };
                        this_4 = this;
                        for (_i = 0, positions_9 = positions; _i < positions_9.length; _i++) {
                            pos = positions_9[_i];
                            _loop_4(pos);
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        for (_a = 0, positions_10 = positions; _a < positions_10.length; _a++) {
                            pos = positions_10[_a];
                            this.killTile(pos.row, pos.col);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.makeBeam = function (x, y, w, h, horizontal) {
        var cfg = GameConfig_1.GameConfig;
        var beam = new cc.Node('Beam');
        beam.parent = this.node;
        beam.zIndex = 9998;
        beam.setPosition(x, y);
        beam.opacity = 220;
        if (horizontal) {
            beam.scaleX = 0;
            beam.scaleY = 1;
        }
        else {
            beam.scaleX = 1;
            beam.scaleY = 0;
        }
        var gfx = beam.addComponent(cc.Graphics);
        gfx.fillColor = cc.color(255, 255, 160, 220);
        gfx.rect(-w / 2, -h / 2, w, h);
        gfx.fill();
        var expandProp = horizontal ? { scaleX: 1 } : { scaleY: 1 };
        var fadeProp = horizontal
            ? { opacity: 0, scaleY: 4 }
            : { opacity: 0, scaleX: 4 };
        cc.tween(beam)
            .to(cfg.LINE_BEAM_EXPAND_DUR, expandProp, { easing: 'sineOut' })
            .to(cfg.LINE_BEAM_FADE_DUR, fadeProp, { easing: 'sineOut' })
            .call(function () { return beam.destroy(); })
            .start();
        return beam;
    };
    FieldRenderer.prototype.animateGravity = function (moves) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks, _i, moves_1, m, n, r, target, dist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        for (_i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
                            m = moves_1[_i];
                            n = this.nodes.get(m.from.row, m.from.col);
                            r = this.renderers.get(m.from.row, m.from.col);
                            if (!n || !r)
                                continue;
                            this.nodes.set(m.to.row, m.to.col, n);
                            this.renderers.set(m.to.row, m.to.col, r);
                            this.nodes.set(m.from.row, m.from.col, null);
                            this.renderers.set(m.from.row, m.from.col, null);
                            target = this.cellPos(m.to.row, m.to.col);
                            dist = m.from.row - m.to.row;
                            tasks.push(r.playFall(target.y, dist * GameConfig_1.GameConfig.FALL_DURATION_PER_CELL));
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateSpawn = function (spawned) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks, _i, spawned_1, s, target, startY, n, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        for (_i = 0, spawned_1 = spawned; _i < spawned_1.length; _i++) {
                            s = spawned_1[_i];
                            target = this.cellPos(s.position.row, s.position.col);
                            startY = target.y + s.fallDistance * this.cellH;
                            n = this.makeTile(s.position.row, s.position.col, s.cell);
                            if (!n)
                                continue;
                            n.y = startY;
                            n.scale = 1;
                            n.opacity = 255;
                            r = this.renderers.get(s.position.row, s.position.col);
                            if (r)
                                tasks.push(r.playFall(target.y, s.fallDistance * GameConfig_1.GameConfig.FALL_DURATION_PER_CELL));
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateSingleSpawn = function (row, col) {
        return __awaiter(this, void 0, Promise, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.renderers.get(row, col);
                        if (!r) return [3 /*break*/, 2];
                        return [4 /*yield*/, r.playSpawn(GameConfig_1.GameConfig.SPAWN_DURATION)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateSwap = function (a, b) {
        return __awaiter(this, void 0, Promise, function () {
            var ra, rb, pa, pb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ra = this.renderers.get(a.row, a.col);
                        rb = this.renderers.get(b.row, b.col);
                        if (!ra || !rb)
                            return [2 /*return*/];
                        pa = this.cellPos(b.row, b.col);
                        pb = this.cellPos(a.row, a.col);
                        this.swapRefs(a, b);
                        return [4 /*yield*/, Promise.all([
                                ra.playMoveTo(pa, GameConfig_1.GameConfig.SWAP_DURATION),
                                rb.playMoveTo(pb, GameConfig_1.GameConfig.SWAP_DURATION),
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateShuffle = function (grid) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animateAllScale(0, GameConfig_1.GameConfig.SHUFFLE_HALF_DURATION)];
                    case 1:
                        _a.sent();
                        this.clearAllTiles();
                        this.createAllTiles(grid);
                        this.forEachNode(function (n) { n.scale = 0; });
                        return [4 /*yield*/, this.animateAllScale(1, GameConfig_1.GameConfig.SHUFFLE_HALF_DURATION)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateInitialAppearance = function () {
        return __awaiter(this, void 0, Promise, function () {
            var colDelay, rowDelay, fallDur, offsetY, _a, rows, cols, tasks, c, _loop_5, this_5, r;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        colDelay = GameConfig_1.GameConfig.CASCADE_COL_DELAY;
                        rowDelay = GameConfig_1.GameConfig.CASCADE_ROW_DELAY;
                        fallDur = GameConfig_1.GameConfig.CASCADE_FALL_DURATION;
                        offsetY = GameConfig_1.GameConfig.CASCADE_START_OFFSET_Y;
                        _a = this.nodes, rows = _a.rows, cols = _a.cols;
                        this.nodes.forEach(function (n) {
                            if (!n)
                                return;
                            n.y += offsetY;
                            n.scale = 0.5;
                            n.opacity = 0;
                        });
                        tasks = [];
                        for (c = 0; c < cols; c++) {
                            _loop_5 = function (r) {
                                var n = this_5.nodes.get(r, c);
                                if (!n)
                                    return "continue";
                                var target = this_5.cellPos(r, c);
                                var delay = c * colDelay + (rows - 1 - r) * rowDelay;
                                tasks.push(new Promise(function (resolve) {
                                    cc.tween(n)
                                        .delay(delay)
                                        .call(function () { n.opacity = 255; })
                                        .to(fallDur, { y: target.y, scale: 1 }, { easing: 'bounceOut' })
                                        .call(function () { return resolve(); })
                                        .start();
                                }));
                            };
                            this_5 = this;
                            for (r = rows - 1; r >= 0; r--) {
                                _loop_5(r);
                            }
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.animateDismissAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animateAllScale(0, GameConfig_1.GameConfig.DISMISS_DURATION)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.showFloatingScore = function (row, col, amount, font) {
        var pos = this.cellPos(row, col);
        var n = new cc.Node('ScorePopup');
        n.parent = this.node;
        n.zIndex = 9999;
        n.setPosition(pos.x, pos.y + 20);
        n.scale = 0.4;
        n.opacity = 255;
        var label = n.addComponent(cc.Label);
        label.string = "+" + amount;
        label.fontSize = GameConfig_1.GameConfig.SCORE_POPUP_FONT_SIZE;
        label.lineHeight = GameConfig_1.GameConfig.SCORE_POPUP_FONT_SIZE + 4;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        if (font) {
            label.font = font;
            label.useSystemFont = false;
        }
        n.color = cc.color(255, 245, 60);
        var growDur = GameConfig_1.GameConfig.SCORE_POPUP_GROW_DURATION;
        var floatDur = GameConfig_1.GameConfig.SCORE_POPUP_FLOAT_DURATION;
        var floatY = pos.y + 20 + GameConfig_1.GameConfig.SCORE_POPUP_FLOAT_Y;
        cc.tween(n)
            .to(growDur, { scale: 1.15 }, { easing: 'backOut' })
            .to(floatDur, { y: floatY, opacity: 0, scale: 0.85 }, { easing: 'sineOut' })
            .call(function () { return n.destroy(); })
            .start();
    };
    FieldRenderer.prototype.setTileHighlight = function (row, col, on) {
        var r = this.renderers.get(row, col);
        if (r)
            r.setHighlight(on);
    };
    FieldRenderer.prototype.clearAllHighlights = function () {
        this.renderers.forEach(function (r) {
            if (r)
                r.setHighlight(false);
        });
    };
    FieldRenderer.prototype.handleTouch = function (e) {
        if (!this.onCellClick)
            return;
        var local = this.node.convertToNodeSpaceAR(e.getLocation());
        var _a = this.nodes, rows = _a.rows, cols = _a.cols;
        var col = Math.round((local.x - this.originX) / this.cellW);
        var row = Math.round((local.y - this.originY) / this.cellH);
        if (row < 0 || row >= rows || col < 0 || col >= cols)
            return;
        var c = this.cellPos(row, col);
        if (Math.abs(local.x - c.x) > GameConfig_1.GameConfig.TILE_WIDTH / 2)
            return;
        if (Math.abs(local.y - c.y) > GameConfig_1.GameConfig.TILE_HEIGHT / 2)
            return;
        this.onCellClick(row, col);
    };
    FieldRenderer.prototype.makeTile = function (row, col, cell) {
        var sf = this.resolveSprite(cell);
        if (!sf)
            return null;
        var n = new cc.Node("Tile_" + row + "_" + col);
        n.parent = this.node;
        var p = this.cellPos(row, col);
        n.setPosition(p.x, p.y);
        var r = n.addComponent(TileRenderer_1.default);
        r.init(sf);
        this.nodes.set(row, col, n);
        this.renderers.set(row, col, r);
        return n;
    };
    FieldRenderer.prototype.killTile = function (row, col) {
        var n = this.nodes.get(row, col);
        if (n) {
            n.destroy();
            this.nodes.set(row, col, null);
            this.renderers.set(row, col, null);
        }
    };
    FieldRenderer.prototype.swapRefs = function (a, b) {
        this.nodes.swap(a.row, a.col, b.row, b.col);
        this.renderers.swap(a.row, a.col, b.row, b.col);
    };
    FieldRenderer.prototype.resolveSprite = function (cell) {
        if (cell.superType !== Types_1.SuperTileType.None)
            return this.superSprites.get(cell.superType) || null;
        return this.colorSprites[cell.color] || null;
    };
    FieldRenderer.prototype.animateAllScale = function (target, dur) {
        return __awaiter(this, void 0, Promise, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        this.forEachNode(function (n) {
                            tasks.push(new Promise(function (res) {
                                cc.tween(n).to(dur, { scale: target }).call(function () { return res(); }).start();
                            }));
                        });
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FieldRenderer.prototype.forEachNode = function (fn) {
        this.nodes.forEach(function (n) { if (n)
            fn(n); });
    };
    FieldRenderer.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.handleTouch, this);
    };
    FieldRenderer = __decorate([
        ccclass
    ], FieldRenderer);
    return FieldRenderer;
}(cc.Component));
exports.default = FieldRenderer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccmVuZGVyaW5nXFxGaWVsZFJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxtREFBa0Q7QUFDbEQscUNBQW9DO0FBQ3BDLHVDQUd1QjtBQUVmLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBS2xDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBa2VDO1FBaGVvQixxQkFBZSxHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO1FBRXBFLFdBQUssR0FBTyxXQUFJLENBQUMsTUFBTSxDQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELGVBQVMsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUNwQyxrQkFBWSxHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO1FBRXhELFdBQUssR0FBSyxDQUFDLENBQUM7UUFDWixXQUFLLEdBQUssQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixpQkFBVyxHQUFnRCxJQUFJLENBQUM7O0lBbWQ1RSxDQUFDO0lBamRVLDRCQUFJLEdBQVgsVUFDSSxJQUFZLEVBQ1osSUFBWSxFQUNaLFlBQThCLEVBQzlCLFlBQWdELEVBQ2hELE9BQTJDO1FBRTNDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUksT0FBTyxDQUFDO1FBRTVCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJB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S0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxJQUFJLENBQUM7WUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBamVnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa2VqQztJQUFELG9CQUFDO0NBbGVELEFBa2VDLENBbGUwQyxFQUFFLENBQUMsU0FBUyxHQWtldEQ7a0JBbGVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbGVSZW5kZXJlciBmcm9tICcuL1RpbGVSZW5kZXJlcic7XHJcbmltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tICcuLi9jb25maWcvR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9jb3JlL0dyaWQnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2VsbERhdGEsIEdyaWRQb3NpdGlvbiwgR3Jhdml0eU1vdmUsIFNwYXduZWRUaWxlLFxyXG4gICAgU3VwZXJUaWxlVHlwZSxcclxufSBmcm9tICcuLi9jb3JlL1R5cGVzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgRWZmZWN0QW5pbWF0b3IgPSAoY2VudGVyOiBHcmlkUG9zaXRpb24sIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pID0+IFByb21pc2U8dm9pZD47XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZFJlbmRlcmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVmZmVjdEFuaW1hdG9ycyA9IG5ldyBNYXA8U3VwZXJUaWxlVHlwZSwgRWZmZWN0QW5pbWF0b3I+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBub2RlcyAgICAgPSBHcmlkLmZpbGxlZDxjYy5Ob2RlIHwgbnVsbD4oMCwgMCwgbnVsbCk7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVycyA9IEdyaWQuZmlsbGVkPFRpbGVSZW5kZXJlciB8IG51bGw+KDAsIDAsIG51bGwpO1xyXG5cclxuICAgIHByaXZhdGUgY29sb3JTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBwcml2YXRlIHN1cGVyU3ByaXRlcyA9IG5ldyBNYXA8U3VwZXJUaWxlVHlwZSwgY2MuU3ByaXRlRnJhbWU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjZWxsVyAgID0gMDtcclxuICAgIHByaXZhdGUgY2VsbEggICA9IDA7XHJcbiAgICBwcml2YXRlIG9yaWdpblggPSAwO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5ZID0gMDtcclxuXHJcbiAgICBwcml2YXRlIG9uQ2VsbENsaWNrOiAoKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdChcclxuICAgICAgICByb3dzOiBudW1iZXIsXHJcbiAgICAgICAgY29sczogbnVtYmVyLFxyXG4gICAgICAgIGNvbG9yU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSxcclxuICAgICAgICBzdXBlclNwcml0ZXM6IE1hcDxTdXBlclRpbGVUeXBlLCBjYy5TcHJpdGVGcmFtZT4sXHJcbiAgICAgICAgb25DbGljazogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gdm9pZCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sb3JTcHJpdGVzID0gY29sb3JTcHJpdGVzO1xyXG4gICAgICAgIHRoaXMuc3VwZXJTcHJpdGVzID0gc3VwZXJTcHJpdGVzO1xyXG4gICAgICAgIHRoaXMub25DZWxsQ2xpY2sgID0gb25DbGljaztcclxuXHJcbiAgICAgICAgdGhpcy5jZWxsVyA9IEdhbWVDb25maWcuVElMRV9XSURUSCAgKyBHYW1lQ29uZmlnLkNFTExfR0FQO1xyXG4gICAgICAgIHRoaXMuY2VsbEggPSBHYW1lQ29uZmlnLlRJTEVfSEVJR0hUICsgR2FtZUNvbmZpZy5DRUxMX0dBUDtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGhpcy5jZWxsVyAtIEdhbWVDb25maWcuQ0VMTF9HQVA7XHJcbiAgICAgICAgY29uc3QgZ3JpZEggPSByb3dzICogdGhpcy5jZWxsSCAtIEdhbWVDb25maWcuQ0VMTF9HQVA7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5YID0gLWdyaWRXIC8gMiArIEdhbWVDb25maWcuVElMRV9XSURUSCAgLyAyO1xyXG4gICAgICAgIHRoaXMub3JpZ2luWSA9IC1ncmlkSCAvIDIgKyBHYW1lQ29uZmlnLlRJTEVfSEVJR0hUIC8gMjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlcyAgICAgPSBHcmlkLmZpbGxlZChyb3dzLCBjb2xzLCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVycyA9IEdyaWQuZmlsbGVkKHJvd3MsIGNvbHMsIG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFZmZlY3RBbmltYXRvcnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmhhbmRsZVRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRFZmZlY3RBbmltYXRvcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbmltYXRvcnMuc2V0KFN1cGVyVGlsZVR5cGUuUm93Q2xlYXIsICAgIChjLCBwKSA9PiB0aGlzLmFuaW1hdGVSb3dDbGVhcihjLCBwKSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbmltYXRvcnMuc2V0KFN1cGVyVGlsZVR5cGUuQ29sdW1uQ2xlYXIsIChjLCBwKSA9PiB0aGlzLmFuaW1hdGVDb2x1bW5DbGVhcihjLCBwKSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RBbmltYXRvcnMuc2V0KFN1cGVyVGlsZVR5cGUuUmFkaXVzQm9tYiwgIChjLCBwKSA9PiB0aGlzLmFuaW1hdGVCb21iQmxhc3QoYywgcCkpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0QW5pbWF0b3JzLnNldChTdXBlclRpbGVUeXBlLkZpZWxkQ2xlYXIsICAoYywgcCkgPT4gdGhpcy5hbmltYXRlRmllbGRDbGVhcihjLCBwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTdXBlckVmZmVjdChcclxuICAgICAgICB0eXBlOiBTdXBlclRpbGVUeXBlLFxyXG4gICAgICAgIGNlbnRlcjogR3JpZFBvc2l0aW9uLFxyXG4gICAgICAgIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10sXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBhbmltYXRvciA9IHRoaXMuZWZmZWN0QW5pbWF0b3JzLmdldCh0eXBlKTtcclxuICAgICAgICBpZiAoYW5pbWF0b3IpIGF3YWl0IGFuaW1hdG9yKGNlbnRlciwgcG9zaXRpb25zKTtcclxuICAgICAgICBlbHNlICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZURlc3Ryb3kocG9zaXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VsbFBvcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gY2MudjIoXHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCArIGNvbCAqIHRoaXMuY2VsbFcsXHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSArIHJvdyAqIHRoaXMuY2VsbEgsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQWxsVGlsZXMoZ3JpZDogR3JpZDxDZWxsRGF0YSB8IG51bGw+KTogdm9pZCB7XHJcbiAgICAgICAgZ3JpZC5mb3JFYWNoKChjZWxsLCByLCBjKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjZWxsKSB0aGlzLm1ha2VUaWxlKHIsIGMsIGNlbGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckFsbFRpbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHsgcm93cywgY29scyB9ID0gdGhpcy5ub2RlcztcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpbGxUaWxlKHIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZVN1cGVyVGlsZShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGNlbGw6IENlbGxEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5raWxsVGlsZShyb3csIGNvbCk7XHJcbiAgICAgICAgdGhpcy5tYWtlVGlsZShyb3csIGNvbCwgY2VsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYnVpbGRJbnN0YW50KGdyaWQ6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBbGxUaWxlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQWxsVGlsZXMoZ3JpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVEZXN0cm95KHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnJlbmRlcmVycy5nZXQocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChyKSB0YXNrcy5wdXNoKHIucGxheURlc3Ryb3koR2FtZUNvbmZpZy5ERVNUUk9ZX0RVUkFUSU9OKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHRoaXMua2lsbFRpbGUocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVCb21iQmxhc3QoY2VudGVyOiBHcmlkUG9zaXRpb24sIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB3YXZlRGVsYXkgID0gR2FtZUNvbmZpZy5CT01CX1dBVkVfREVMQVlfUEVSX0RJU1Q7XHJcbiAgICAgICAgY29uc3QgZmxhc2hEdXIgICA9IEdhbWVDb25maWcuQk9NQl9GTEFTSF9EVVJBVElPTjtcclxuICAgICAgICBjb25zdCBzaHJpbmtEdXIgID0gR2FtZUNvbmZpZy5CT01CX1NIUklOS19EVVJBVElPTjtcclxuICAgICAgICBjb25zdCBmbGFzaFNjYWxlID0gR2FtZUNvbmZpZy5CT01CX0ZMQVNIX1NDQUxFO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vZGVzLmdldChwb3Mucm93LCBwb3MuY29sKTtcclxuICAgICAgICAgICAgaWYgKCFuKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgID0gTWF0aC5hYnMocG9zLnJvdyAtIGNlbnRlci5yb3cpICsgTWF0aC5hYnMocG9zLmNvbCAtIGNlbnRlci5jb2wpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IGRpc3QgKiB3YXZlRGVsYXk7XHJcblxyXG4gICAgICAgICAgICB0YXNrcy5wdXNoKG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obilcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGZsYXNoRHVyLCB7IHNjYWxlOiBmbGFzaFNjYWxlIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oc2hyaW5rRHVyLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnYmFja0luJyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB0aGlzLmtpbGxUaWxlKHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlUm93Q2xlYXIoY2VudGVyOiBHcmlkUG9zaXRpb24sIHBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBjZmcgPSBHYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHsgcm93cywgY29scyB9ID0gdGhpcy5ub2RlcztcclxuXHJcbiAgICAgICAgY29uc3QgYmVhbVkgPSB0aGlzLmNlbGxQb3MoY2VudGVyLnJvdywgMCkueTtcclxuICAgICAgICBjb25zdCBmdWxsVyA9IGNvbHMgKiB0aGlzLmNlbGxXICsgY2ZnLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5tYWtlQmVhbSgwLCBiZWFtWSwgZnVsbFcsIGNmZy5MSU5FX0JFQU1fSEVJR0hULCB0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5ub2Rlcy5nZXQocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICAgICAgICAgIGlmICghbikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ICA9IE1hdGguYWJzKHBvcy5jb2wgLSBjZW50ZXIuY29sKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBkaXN0ICogY2ZnLkxJTkVfU1dFRVBfREVMQVlfUEVSX0NFTEw7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpciAgID0gcG9zLmNvbCA+PSBjZW50ZXIuY29sID8gMSA6IC0xO1xyXG5cclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG4pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhjZmcuTElORV9TVFJFVENIX0RVUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZVg6IDEuNSwgc2NhbGVZOiAwLjU1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oY2ZnLkxJTkVfU0hSSU5LX0RVUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgYW5nbGU6IDIwICogZGlyIH0gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVhc2luZzogJ3NpbmVJbicgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHRoaXMua2lsbFRpbGUocG9zLnJvdywgcG9zLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVDb2x1bW5DbGVhcihjZW50ZXI6IEdyaWRQb3NpdGlvbiwgcG9zaXRpb25zOiBHcmlkUG9zaXRpb25bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IEdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc3QgeyByb3dzLCBjb2xzIH0gPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgICAgICBjb25zdCBiZWFtWCA9IHRoaXMuY2VsbFBvcygwLCBjZW50ZXIuY29sKS54O1xyXG4gICAgICAgIGNvbnN0IGZ1bGxIID0gcm93cyAqIHRoaXMuY2VsbEggKyBjZmcuVElMRV9IRUlHSFQ7XHJcbiAgICAgICAgdGhpcy5tYWtlQmVhbShiZWFtWCwgMCwgY2ZnLkxJTkVfQkVBTV9IRUlHSFQsIGZ1bGxILCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMubm9kZXMuZ2V0KHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgICAgICAgICBpZiAoIW4pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCAgPSBNYXRoLmFicyhwb3Mucm93IC0gY2VudGVyLnJvdyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gZGlzdCAqIGNmZy5MSU5FX1NXRUVQX0RFTEFZX1BFUl9DRUxMO1xyXG4gICAgICAgICAgICBjb25zdCBkaXIgICA9IHBvcy5yb3cgPj0gY2VudGVyLnJvdyA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oY2ZnLkxJTkVfU1RSRVRDSF9EVVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGVYOiAwLjU1LCBzY2FsZVk6IDEuNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGNmZy5MSU5FX1NIUklOS19EVVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGFuZ2xlOiAyMCAqIGRpciB9IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlYXNpbmc6ICdzaW5lSW4nIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gcmVzb2x2ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcG9zaXRpb25zKSB0aGlzLmtpbGxUaWxlKHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlRmllbGRDbGVhcihjZW50ZXI6IEdyaWRQb3NpdGlvbiwgcG9zaXRpb25zOiBHcmlkUG9zaXRpb25bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IEdhbWVDb25maWc7XHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMubm9kZXMuZ2V0KHBvcy5yb3csIHBvcy5jb2wpO1xyXG4gICAgICAgICAgICBpZiAoIW4pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCAgPSBNYXRoLmFicyhwb3Mucm93IC0gY2VudGVyLnJvdykgKyBNYXRoLmFicyhwb3MuY29sIC0gY2VudGVyLmNvbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gZGlzdCAqIGNmZy5GSUVMRF9DTEVBUl9ERUxBWV9QRVJfRElTVDtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oY2ZnLkZJRUxEX0NMRUFSX0ZMQVNIX0RVUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZTogMS4zNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGNmZy5GSUVMRF9DTEVBUl9TSFJJTktfRFVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAnYmFja0luJyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykgdGhpcy5raWxsVGlsZShwb3Mucm93LCBwb3MuY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VCZWFtKFxyXG4gICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyLFxyXG4gICAgICAgIHc6IG51bWJlciwgaDogbnVtYmVyLFxyXG4gICAgICAgIGhvcml6b250YWw6IGJvb2xlYW4sXHJcbiAgICApOiBjYy5Ob2RlIHtcclxuICAgICAgICBjb25zdCBjZmcgPSBHYW1lQ29uZmlnO1xyXG4gICAgICAgIGNvbnN0IGJlYW0gPSBuZXcgY2MuTm9kZSgnQmVhbScpO1xyXG4gICAgICAgIGJlYW0ucGFyZW50ICA9IHRoaXMubm9kZTtcclxuICAgICAgICBiZWFtLnpJbmRleCAgPSA5OTk4O1xyXG4gICAgICAgIGJlYW0uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgYmVhbS5vcGFjaXR5ID0gMjIwO1xyXG5cclxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkgeyBiZWFtLnNjYWxlWCA9IDA7IGJlYW0uc2NhbGVZID0gMTsgfVxyXG4gICAgICAgIGVsc2UgICAgICAgICAgICB7IGJlYW0uc2NhbGVYID0gMTsgYmVhbS5zY2FsZVkgPSAwOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdmeCA9IGJlYW0uYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBnZnguZmlsbENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDE2MCwgMjIwKTtcclxuICAgICAgICBnZngucmVjdCgtdyAvIDIsIC1oIC8gMiwgdywgaCk7XHJcbiAgICAgICAgZ2Z4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwYW5kUHJvcCA9IGhvcml6b250YWwgPyB7IHNjYWxlWDogMSB9IDogeyBzY2FsZVk6IDEgfTtcclxuICAgICAgICBjb25zdCBmYWRlUHJvcCAgID0gaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICA/IHsgb3BhY2l0eTogMCwgc2NhbGVZOiA0IH1cclxuICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHNjYWxlWDogNCB9O1xyXG5cclxuICAgICAgICBjYy50d2VlbihiZWFtKVxyXG4gICAgICAgICAgICAudG8oY2ZnLkxJTkVfQkVBTV9FWFBBTkRfRFVSLCBleHBhbmRQcm9wIGFzIGFueSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oY2ZnLkxJTkVfQkVBTV9GQURFX0RVUiwgICBmYWRlUHJvcCAgYXMgYW55LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IGJlYW0uZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJlYW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVHcmF2aXR5KG1vdmVzOiBHcmF2aXR5TW92ZVtdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtb3Zlcykge1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5ub2Rlcy5nZXQobS5mcm9tLnJvdywgbS5mcm9tLmNvbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnJlbmRlcmVycy5nZXQobS5mcm9tLnJvdywgbS5mcm9tLmNvbCk7XHJcbiAgICAgICAgICAgIGlmICghbiB8fCAhcikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnNldChtLnRvLnJvdywgbS50by5jb2wsIG4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5zZXQobS50by5yb3csIG0udG8uY29sLCByKTtcclxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobS5mcm9tLnJvdywgbS5mcm9tLmNvbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnNldChtLmZyb20ucm93LCBtLmZyb20uY29sLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2VsbFBvcyhtLnRvLnJvdywgbS50by5jb2wpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ICAgPSBtLmZyb20ucm93IC0gbS50by5yb3c7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2goci5wbGF5RmFsbCh0YXJnZXQueSwgZGlzdCAqIEdhbWVDb25maWcuRkFMTF9EVVJBVElPTl9QRVJfQ0VMTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTcGF3bihzcGF3bmVkOiBTcGF3bmVkVGlsZVtdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzcGF3bmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2VsbFBvcyhzLnBvc2l0aW9uLnJvdywgcy5wb3NpdGlvbi5jb2wpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFkgPSB0YXJnZXQueSArIHMuZmFsbERpc3RhbmNlICogdGhpcy5jZWxsSDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLm1ha2VUaWxlKHMucG9zaXRpb24ucm93LCBzLnBvc2l0aW9uLmNvbCwgcy5jZWxsKTtcclxuICAgICAgICAgICAgaWYgKCFuKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbi55ID0gc3RhcnRZOyBuLnNjYWxlID0gMTsgbi5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucmVuZGVyZXJzLmdldChzLnBvc2l0aW9uLnJvdywgcy5wb3NpdGlvbi5jb2wpO1xyXG4gICAgICAgICAgICBpZiAocikgdGFza3MucHVzaChyLnBsYXlGYWxsKHRhcmdldC55LCBzLmZhbGxEaXN0YW5jZSAqIEdhbWVDb25maWcuRkFMTF9EVVJBVElPTl9QRVJfQ0VMTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTaW5nbGVTcGF3bihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5yZW5kZXJlcnMuZ2V0KHJvdywgY29sKTtcclxuICAgICAgICBpZiAocikgYXdhaXQgci5wbGF5U3Bhd24oR2FtZUNvbmZpZy5TUEFXTl9EVVJBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTd2FwKGE6IEdyaWRQb3NpdGlvbiwgYjogR3JpZFBvc2l0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcmEgPSB0aGlzLnJlbmRlcmVycy5nZXQoYS5yb3csIGEuY29sKTtcclxuICAgICAgICBjb25zdCByYiA9IHRoaXMucmVuZGVyZXJzLmdldChiLnJvdywgYi5jb2wpO1xyXG4gICAgICAgIGlmICghcmEgfHwgIXJiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBhID0gdGhpcy5jZWxsUG9zKGIucm93LCBiLmNvbCk7XHJcbiAgICAgICAgY29uc3QgcGIgPSB0aGlzLmNlbGxQb3MoYS5yb3csIGEuY29sKTtcclxuICAgICAgICB0aGlzLnN3YXBSZWZzKGEsIGIpO1xyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHJhLnBsYXlNb3ZlVG8ocGEsIEdhbWVDb25maWcuU1dBUF9EVVJBVElPTiksXHJcbiAgICAgICAgICAgIHJiLnBsYXlNb3ZlVG8ocGIsIEdhbWVDb25maWcuU1dBUF9EVVJBVElPTiksXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVTaHVmZmxlKGdyaWQ6IEdyaWQ8Q2VsbERhdGEgfCBudWxsPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZUFsbFNjYWxlKDAsIEdhbWVDb25maWcuU0hVRkZMRV9IQUxGX0RVUkFUSU9OKTtcclxuICAgICAgICB0aGlzLmNsZWFyQWxsVGlsZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFsbFRpbGVzKGdyaWQpO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE5vZGUobiA9PiB7IG4uc2NhbGUgPSAwOyB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVBbGxTY2FsZSgxLCBHYW1lQ29uZmlnLlNIVUZGTEVfSEFMRl9EVVJBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGVJbml0aWFsQXBwZWFyYW5jZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBjb2xEZWxheSA9IEdhbWVDb25maWcuQ0FTQ0FERV9DT0xfREVMQVk7XHJcbiAgICAgICAgY29uc3Qgcm93RGVsYXkgPSBHYW1lQ29uZmlnLkNBU0NBREVfUk9XX0RFTEFZO1xyXG4gICAgICAgIGNvbnN0IGZhbGxEdXIgID0gR2FtZUNvbmZpZy5DQVNDQURFX0ZBTExfRFVSQVRJT047XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSAgPSBHYW1lQ29uZmlnLkNBU0NBREVfU1RBUlRfT0ZGU0VUX1k7XHJcbiAgICAgICAgY29uc3QgeyByb3dzLCBjb2xzIH0gPSB0aGlzLm5vZGVzO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuKSByZXR1cm47XHJcbiAgICAgICAgICAgIG4ueSAgICAgICs9IG9mZnNldFk7XHJcbiAgICAgICAgICAgIG4uc2NhbGUgICA9IDAuNTtcclxuICAgICAgICAgICAgbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHM7IGMrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gcm93cyAtIDE7IHIgPj0gMDsgci0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5ub2Rlcy5nZXQociwgYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW4pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2VsbFBvcyhyLCBjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGF5ICA9IGMgKiBjb2xEZWxheSArIChyb3dzIC0gMSAtIHIpICogcm93RGVsYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgbi5vcGFjaXR5ID0gMjU1OyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oZmFsbER1ciwgeyB5OiB0YXJnZXQueSwgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdib3VuY2VPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYW5pbWF0ZURpc21pc3NBbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlQWxsU2NhbGUoMCwgR2FtZUNvbmZpZy5ESVNNSVNTX0RVUkFUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0Zsb2F0aW5nU2NvcmUoXHJcbiAgICAgICAgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBhbW91bnQ6IG51bWJlciwgZm9udDogY2MuRm9udCB8IG51bGwsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmNlbGxQb3Mocm93LCBjb2wpO1xyXG5cclxuICAgICAgICBjb25zdCBuID0gbmV3IGNjLk5vZGUoJ1Njb3JlUG9wdXAnKTtcclxuICAgICAgICBuLnBhcmVudCAgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbi56SW5kZXggID0gOTk5OTtcclxuICAgICAgICBuLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSArIDIwKTtcclxuICAgICAgICBuLnNjYWxlICAgPSAwLjQ7XHJcbiAgICAgICAgbi5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbCAgICAgICAgPSBuLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGFiZWwuc3RyaW5nICAgICAgID0gYCske2Ftb3VudH1gO1xyXG4gICAgICAgIGxhYmVsLmZvbnRTaXplICAgICA9IEdhbWVDb25maWcuU0NPUkVfUE9QVVBfRk9OVF9TSVpFO1xyXG4gICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgICA9IEdhbWVDb25maWcuU0NPUkVfUE9QVVBfRk9OVF9TSVpFICsgNDtcclxuICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIGxhYmVsLnZlcnRpY2FsQWxpZ24gICA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIGlmIChmb250KSB7XHJcbiAgICAgICAgICAgIGxhYmVsLmZvbnQgICAgICAgICAgPSBmb250O1xyXG4gICAgICAgICAgICBsYWJlbC51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNDUsIDYwKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3Jvd0R1ciAgPSBHYW1lQ29uZmlnLlNDT1JFX1BPUFVQX0dST1dfRFVSQVRJT047XHJcbiAgICAgICAgY29uc3QgZmxvYXREdXIgPSBHYW1lQ29uZmlnLlNDT1JFX1BPUFVQX0ZMT0FUX0RVUkFUSU9OO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0WSAgID0gcG9zLnkgKyAyMCArIEdhbWVDb25maWcuU0NPUkVfUE9QVVBfRkxPQVRfWTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4obilcclxuICAgICAgICAgICAgLnRvKGdyb3dEdXIsIHsgc2NhbGU6IDEuMTUgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oZmxvYXREdXIsIHsgeTogZmxvYXRZLCBvcGFjaXR5OiAwLCBzY2FsZTogMC44NSB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IG4uZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGlsZUhpZ2hsaWdodChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIG9uOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgciA9IHRoaXMucmVuZGVyZXJzLmdldChyb3csIGNvbCk7XHJcbiAgICAgICAgaWYgKHIpIHIuc2V0SGlnaGxpZ2h0KG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJBbGxIaWdobGlnaHRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyKSByLnNldEhpZ2hsaWdodChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUb3VjaChlOiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uQ2VsbENsaWNrKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zdCB7IHJvd3MsIGNvbHMgfSA9IHRoaXMubm9kZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGgucm91bmQoKGxvY2FsLnggLSB0aGlzLm9yaWdpblgpIC8gdGhpcy5jZWxsVyk7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5yb3VuZCgobG9jYWwueSAtIHRoaXMub3JpZ2luWSkgLyB0aGlzLmNlbGxIKTtcclxuICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gcm93cyB8fCBjb2wgPCAwIHx8IGNvbCA+PSBjb2xzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNlbGxQb3Mocm93LCBjb2wpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhsb2NhbC54IC0gYy54KSA+IEdhbWVDb25maWcuVElMRV9XSURUSCAgLyAyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGxvY2FsLnkgLSBjLnkpID4gR2FtZUNvbmZpZy5USUxFX0hFSUdIVCAvIDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNlbGxDbGljayhyb3csIGNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlVGlsZShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGNlbGw6IENlbGxEYXRhKTogY2MuTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHNmID0gdGhpcy5yZXNvbHZlU3ByaXRlKGNlbGwpO1xyXG4gICAgICAgIGlmICghc2YpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBuID0gbmV3IGNjLk5vZGUoYFRpbGVfJHtyb3d9XyR7Y29sfWApO1xyXG4gICAgICAgIG4ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmNlbGxQb3Mocm93LCBjb2wpO1xyXG4gICAgICAgIG4uc2V0UG9zaXRpb24ocC54LCBwLnkpO1xyXG5cclxuICAgICAgICBjb25zdCByID0gbi5hZGRDb21wb25lbnQoVGlsZVJlbmRlcmVyKTtcclxuICAgICAgICByLmluaXQoc2YpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzLnNldChyb3csIGNvbCwgbik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcnMuc2V0KHJvdywgY29sLCByKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtpbGxUaWxlKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vZGVzLmdldChyb3csIGNvbCk7XHJcbiAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KHJvdywgY29sLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMuc2V0KHJvdywgY29sLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzd2FwUmVmcyhhOiBHcmlkUG9zaXRpb24sIGI6IEdyaWRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZXMuc3dhcChhLnJvdywgYS5jb2wsIGIucm93LCBiLmNvbCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcnMuc3dhcChhLnJvdywgYS5jb2wsIGIucm93LCBiLmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlU3ByaXRlKGNlbGw6IENlbGxEYXRhKTogY2MuU3ByaXRlRnJhbWUgfCBudWxsIHtcclxuICAgICAgICBpZiAoY2VsbC5zdXBlclR5cGUgIT09IFN1cGVyVGlsZVR5cGUuTm9uZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VwZXJTcHJpdGVzLmdldChjZWxsLnN1cGVyVHlwZSkgfHwgbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclNwcml0ZXNbY2VsbC5jb2xvcl0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGFuaW1hdGVBbGxTY2FsZSh0YXJnZXQ6IG51bWJlciwgZHVyOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoTm9kZShuID0+IHtcclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgUHJvbWlzZTx2b2lkPihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obikudG8oZHVyLCB7IHNjYWxlOiB0YXJnZXQgfSkuY2FsbCgoKSA9PiByZXMoKSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvckVhY2hOb2RlKGZuOiAobjogY2MuTm9kZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChuID0+IHsgaWYgKG4pIGZuKG4pOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmhhbmRsZVRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=