
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/Types.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91a0fAJ5IJC7oaC34CYUCtm', 'Types');
// Scripts/core/Types.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResult = exports.BoosterType = exports.SuperTileType = exports.TILE_COLOR_COUNT = exports.TileColor = void 0;
var TileColor;
(function (TileColor) {
    TileColor[TileColor["Blue"] = 0] = "Blue";
    TileColor[TileColor["Red"] = 1] = "Red";
    TileColor[TileColor["Green"] = 2] = "Green";
    TileColor[TileColor["Yellow"] = 3] = "Yellow";
    TileColor[TileColor["Purple"] = 4] = "Purple";
})(TileColor = exports.TileColor || (exports.TileColor = {}));
exports.TILE_COLOR_COUNT = 5;
var SuperTileType;
(function (SuperTileType) {
    SuperTileType[SuperTileType["None"] = 0] = "None";
    SuperTileType[SuperTileType["RowClear"] = 1] = "RowClear";
    SuperTileType[SuperTileType["ColumnClear"] = 2] = "ColumnClear";
    SuperTileType[SuperTileType["RadiusBomb"] = 3] = "RadiusBomb";
    SuperTileType[SuperTileType["FieldClear"] = 4] = "FieldClear";
})(SuperTileType = exports.SuperTileType || (exports.SuperTileType = {}));
var BoosterType;
(function (BoosterType) {
    BoosterType[BoosterType["None"] = 0] = "None";
    BoosterType[BoosterType["Bomb"] = 1] = "Bomb";
    BoosterType[BoosterType["Teleport"] = 2] = "Teleport";
})(BoosterType = exports.BoosterType || (exports.BoosterType = {}));
var GameResult;
(function (GameResult) {
    GameResult[GameResult["None"] = 0] = "None";
    GameResult[GameResult["Win"] = 1] = "Win";
    GameResult[GameResult["Lose"] = 2] = "Lose";
})(GameResult = exports.GameResult || (exports.GameResult = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29yZVxcVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFVLENBQUE7SUFDVix1Q0FBVSxDQUFBO0lBQ1YsMkNBQVUsQ0FBQTtJQUNWLDZDQUFVLENBQUE7SUFDViw2Q0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFFbEMsSUFBWSxhQU1YO0FBTkQsV0FBWSxhQUFhO0lBQ3JCLGlEQUFlLENBQUE7SUFDZix5REFBZSxDQUFBO0lBQ2YsK0RBQWUsQ0FBQTtJQUNmLDZEQUFlLENBQUE7SUFDZiw2REFBZSxDQUFBO0FBQ25CLENBQUMsRUFOVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU14QjtBQUVELElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiw2Q0FBWSxDQUFBO0lBQ1osNkNBQVksQ0FBQTtJQUNaLHFEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBRUQsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLDJDQUFRLENBQUE7SUFDUix5Q0FBUSxDQUFBO0lBQ1IsMkNBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFRpbGVDb2xvciB7XHJcbiAgICBCbHVlICAgPSAwLFxyXG4gICAgUmVkICAgID0gMSxcclxuICAgIEdyZWVuICA9IDIsXHJcbiAgICBZZWxsb3cgPSAzLFxyXG4gICAgUHVycGxlID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRJTEVfQ09MT1JfQ09VTlQgPSA1O1xyXG5cclxuZXhwb3J0IGVudW0gU3VwZXJUaWxlVHlwZSB7XHJcbiAgICBOb25lICAgICAgICA9IDAsXHJcbiAgICBSb3dDbGVhciAgICA9IDEsXHJcbiAgICBDb2x1bW5DbGVhciA9IDIsXHJcbiAgICBSYWRpdXNCb21iICA9IDMsXHJcbiAgICBGaWVsZENsZWFyICA9IDQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJvb3N0ZXJUeXBlIHtcclxuICAgIE5vbmUgICAgID0gMCxcclxuICAgIEJvbWIgICAgID0gMSxcclxuICAgIFRlbGVwb3J0ID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2FtZVJlc3VsdCB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFdpbiAgPSAxLFxyXG4gICAgTG9zZSA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbERhdGEge1xyXG4gICAgY29sb3I6IFRpbGVDb2xvcjtcclxuICAgIHN1cGVyVHlwZTogU3VwZXJUaWxlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkUG9zaXRpb24ge1xyXG4gICAgcm93OiBudW1iZXI7XHJcbiAgICBjb2w6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmF2aXR5TW92ZSB7XHJcbiAgICBmcm9tOiBHcmlkUG9zaXRpb247XHJcbiAgICB0bzogR3JpZFBvc2l0aW9uO1xyXG4gICAgY2VsbDogQ2VsbERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Bhd25lZFRpbGUge1xyXG4gICAgcG9zaXRpb246IEdyaWRQb3NpdGlvbjtcclxuICAgIGNlbGw6IENlbGxEYXRhO1xyXG4gICAgZmFsbERpc3RhbmNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkUXVlcnkge1xyXG4gICAgZ2V0Um93cygpOiBudW1iZXI7XHJcbiAgICBnZXRDb2xzKCk6IG51bWJlcjtcclxuICAgIGdldENlbGwocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogQ2VsbERhdGEgfCBudWxsO1xyXG4gICAgcG9zaXRpb25zSW5Sb3cocm93OiBudW1iZXIpOiBHcmlkUG9zaXRpb25bXTtcclxuICAgIHBvc2l0aW9uc0luQ29sdW1uKGNvbDogbnVtYmVyKTogR3JpZFBvc2l0aW9uW107XHJcbiAgICBwb3NpdGlvbnNJblJhZGl1cyhjZW50ZXJSb3c6IG51bWJlciwgY2VudGVyQ29sOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogR3JpZFBvc2l0aW9uW107XHJcbiAgICBhbGxOb25OdWxsUG9zaXRpb25zKCk6IEdyaWRQb3NpdGlvbltdO1xyXG59XHJcbiJdfQ==