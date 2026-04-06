"use strict";
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