"use strict";
exports.__esModule = true;
var paddingGenerator_1 = require("./generators/paddingGenerator");
var marginGenerator_1 = require("./generators/marginGenerator");
var displayGenerator_1 = require("./generators/displayGenerator");
var flexDirectionGenerator_1 = require("./generators/flexDirectionGenerator");
var flexGrowGenerator_1 = require("./generators/flexGrowGenerator");
var flexWrapGenerator_1 = require("./generators/flexWrapGenerator");
var flexShrinkGenerator_1 = require("./generators/flexShrinkGenerator");
var floatGenerator_1 = require("./generators/floatGenerator");
var fontWeightGenerator_1 = require("./generators/fontWeightGenerator");
var widthGenerator_1 = require("./generators/widthGenerator");
var fontSizeGenerator_1 = require("./generators/fontSizeGenerator");
var positionGenerator_1 = require("./generators/positionGenerator");
var alignContentGenerator_1 = require("./generators/alignContentGenerator");
var alignItemsGenerator_1 = require("./generators/alignItemsGenerator");
var justifyContentGenerator_1 = require("./generators/justifyContentGenerator");
var textDecorationGenerator_1 = require("./generators/textDecorationGenerator");
var heightGenerator_1 = require("./generators/heightGenerator");
var colorGenerator_1 = require("./generators/colorGenerator");
var borderRadiusGenerator_1 = require("./generators/borderRadiusGenerator");
var cursorGenerator_1 = require("./generators/cursorGenerator");
var backgroundColorGenerator_1 = require("./generators/backgroundColorGenerator");
var textAlignGenerator_1 = require("./generators/textAlignGenerator");
var wordBreakGenerator_1 = require("./generators/wordBreakGenerator");
var whiteSpaceGenerator_1 = require("./generators/whiteSpaceGenerator");
var objectFitGenerator_1 = require("./generators/objectFitGenerator");
var opacityGenerator_1 = require("./generators/opacityGenerator");
var overflowGenerator_1 = require("./generators/overflowGenerator");
var borderGenerator_1 = require("./generators/borderGenerator");
var breakpoints_1 = require("./vars/breakpoints");
var colors_1 = require("./vars/colors");
var border_1 = require("./vars/border");
var boxShadowGenerator_1 = require("./generators/boxShadowGenerator");
var shadow_1 = require("./vars/shadow");
var Cssville = /** @class */ (function () {
    function Cssville() {
    }
    Cssville.getCss = function (classes) {
        if (classes === void 0) { classes = []; }
        var css = "";
        var allVarsCss = "";
        for (var _i = 0, _a = this.variables; _i < _a.length; _i++) {
            var varsCollection = _a[_i];
            var collectionCss = "";
            for (var _b = 0, varsCollection_1 = varsCollection; _b < varsCollection_1.length; _b++) {
                var v = varsCollection_1[_b];
                collectionCss += " ".concat(v.css);
            }
            allVarsCss += " ".concat(collectionCss);
        }
        css += ":root {".concat(allVarsCss, "} ");
        for (var x = 0; x < Cssville.generators.length; x++) {
            var g = Cssville.generators[x];
            var cssPart = g.generate("", classes);
            css += cssPart;
        }
        for (var _c = 0, _d = breakpoints_1["default"].breakpoints; _c < _d.length; _c++) {
            var breakpoint = _d[_c];
            var innerCss = "";
            for (var x = 0; x < Cssville.generators.length; x++) {
                var g = Cssville.generators[x];
                var cssPartForPrefix = g.generate(breakpoint.name, classes);
                innerCss += cssPartForPrefix;
            }
            css += "@media screen and (max-width: ".concat(breakpoint["var"], ") { ").concat(innerCss, "} ");
        }
        return css;
    };
    Cssville.generators = [
        new alignContentGenerator_1.AlignContentGenerator("align-content"),
        new alignItemsGenerator_1.AlignItemsGenerator("align-items"),
        new borderGenerator_1.BorderGenerator("border"),
        new borderRadiusGenerator_1.BorderRadiusGenerator("border-radius"),
        new boxShadowGenerator_1.BoxShadowGenerator("box-shadow"),
        new backgroundColorGenerator_1.BackgroundColorGenerator("background-color"),
        new colorGenerator_1.ColorGenerator("color"),
        new cursorGenerator_1.CursorGenerator("cursor"),
        new displayGenerator_1.DisplayGenerator("display"),
        new flexDirectionGenerator_1.FlexDirectionGenerator("flex-direction"),
        new flexGrowGenerator_1.FlexGrowGenerator("flex-grow"),
        new flexShrinkGenerator_1.FlexShrinkGenerator("flex-shrink"),
        new flexWrapGenerator_1.FlexWrapGenerator("flex-wrap"),
        new floatGenerator_1.FloatGenerator("float"),
        new fontSizeGenerator_1.FontSizeGenerator("font-size"),
        new fontWeightGenerator_1.FontWeightGenerator("font-weight"),
        new heightGenerator_1.HeightGenerator("height"),
        new justifyContentGenerator_1.JustifyContentGenerator("justify-content"),
        new marginGenerator_1.MarginGenerator("margin"),
        new objectFitGenerator_1.ObjectFitGenerator("object-fit"),
        new opacityGenerator_1.OpacityGenerator("opacity"),
        new overflowGenerator_1.OverflowGenerator("overflow"),
        new paddingGenerator_1.PaddingGenerator("padding"),
        new positionGenerator_1.PositionGenerator("position"),
        new textAlignGenerator_1.TextAlignGenerator("text-align"),
        new textDecorationGenerator_1.TextDecorationGenerator("text-decoration"),
        new widthGenerator_1.WidthGenerator("width"),
        new whiteSpaceGenerator_1.WhiteSpaceGenerator("white-space"),
        new wordBreakGenerator_1.WordBreakGenerator("word-break"),
    ];
    Cssville.variables = [
        breakpoints_1["default"].breakpoints,
        colors_1["default"].basicColors,
        colors_1["default"].colorsPalette,
        border_1["default"].vars,
        shadow_1["default"].vars,
    ];
    return Cssville;
}());
exports["default"] = Cssville;
