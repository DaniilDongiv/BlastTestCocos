"use strict";
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