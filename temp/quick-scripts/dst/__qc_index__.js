
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/BlastGame');
require('./assets/Scripts/config/GameConfig');
require('./assets/Scripts/core/FieldModel');
require('./assets/Scripts/core/GameSession');
require('./assets/Scripts/core/Grid');
require('./assets/Scripts/core/MatchResolver');
require('./assets/Scripts/core/Types');
require('./assets/Scripts/input/InputState');
require('./assets/Scripts/rendering/FieldRenderer');
require('./assets/Scripts/rendering/HUDPresenter');
require('./assets/Scripts/rendering/ResultPopup');
require('./assets/Scripts/rendering/TileRenderer');
require('./assets/Scripts/strategies/SuperTileStrategy');

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