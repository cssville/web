"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var VarBase_1 = require("../VarBase");
var amber_1 = require("./color/amber");
var blue_1 = require("./color/blue");
var blueGrey_1 = require("./color/blueGrey");
var brown_1 = require("./color/brown");
var cyan_1 = require("./color/cyan");
var deepOrange_1 = require("./color/deepOrange");
var deepPurple_1 = require("./color/deepPurple");
var green_1 = require("./color/green");
var grey_1 = require("./color/grey");
var indigo_1 = require("./color/indigo");
var lightBlue_1 = require("./color/lightBlue");
var lightGreen_1 = require("./color/lightGreen");
var lime_1 = require("./color/lime");
var orange_1 = require("./color/orange");
var pink_1 = require("./color/pink");
var purple_1 = require("./color/purple");
var red_1 = require("./color/red");
var teal_1 = require("./color/teal");
var yellow_1 = require("./color/yellow");
var CssvilleColors = /** @class */ (function () {
    function CssvilleColors() {
    }
    CssvilleColors.hexToRgb = function (hex, alpha) {
        if (alpha === void 0) { alpha = 1.0; }
        hex = hex.replace(/^#/, '');
        var r = parseInt(hex.slice(0, 2), 16);
        var g = parseInt(hex.slice(2, 4), 16);
        var b = parseInt(hex.slice(4, 6), 16);
        return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    };
    var _a;
    _a = CssvilleColors;
    CssvilleColors.text = new VarBase_1.VarBase("color", "text", blueGrey_1["default"].blueGrey800["var"]);
    CssvilleColors.border = new VarBase_1.VarBase("color", "border", blueGrey_1["default"].blueGrey800["var"]);
    CssvilleColors.shadow = new VarBase_1.VarBase("color", "shadow", "rgba(140, 149, 159, 0.2)");
    CssvilleColors.basicColors = [
        _a.text,
        _a.border,
        _a.shadow,
    ];
    CssvilleColors.colorsPalette = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], red_1["default"].colors, true), pink_1["default"].colors, true), purple_1["default"].colors, true), deepPurple_1["default"].colors, true), indigo_1["default"].colors, true), blue_1["default"].colors, true), lightBlue_1["default"].colors, true), cyan_1["default"].colors, true), teal_1["default"].colors, true), green_1["default"].colors, true), lightGreen_1["default"].colors, true), lime_1["default"].colors, true), yellow_1["default"].colors, true), amber_1["default"].colors, true), orange_1["default"].colors, true), deepOrange_1["default"].colors, true), brown_1["default"].colors, true), grey_1["default"].colors, true), blueGrey_1["default"].colors, true);
    CssvilleColors.colorsPalettePostfixValues = _a.colorsPalette.map(function (e) { return e.postfixValue; });
    return CssvilleColors;
}());
exports["default"] = CssvilleColors;
