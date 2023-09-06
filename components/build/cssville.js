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
var Cssville = /** @class */ (function () {
    function Cssville() {
    }
    Cssville.getCss = function (classes) {
        if (classes === void 0) { classes = []; }
        var css = "";
        var breakpointsCss = "";
        var breakpointNames = Object.keys(this.breakpoints);
        for (var _i = 0, breakpointNames_1 = breakpointNames; _i < breakpointNames_1.length; _i++) {
            var breakpointName = breakpointNames_1[_i];
            var breakpointValue = this.breakpoints[breakpointName];
            breakpointsCss += " --cssville-".concat(breakpointName, "-breakpoint: ").concat(breakpointValue, ";");
        }
        css += ":root {".concat(breakpointsCss, "}");
        for (var x = 0; x < Cssville.generators.length; x++) {
            var g = Cssville.generators[x];
            var cssPart = g.generate("", classes);
            css += cssPart;
        }
        for (var _a = 0, breakpointNames_2 = breakpointNames; _a < breakpointNames_2.length; _a++) {
            var breakpointName = breakpointNames_2[_a];
            var v = "--cssville-".concat(breakpointName, "-breakpoint");
            var innerCss = "";
            for (var x = 0; x < Cssville.generators.length; x++) {
                var g = Cssville.generators[x];
                var cssPartForPrefix = g.generate(breakpointName, classes);
                innerCss += cssPartForPrefix;
            }
            css += "@media screen and (max-width: var(".concat(v, ")) { ").concat(innerCss, "} ");
        }
        return css;
    };
    Cssville.breakpoints = {
        xl: "1280px",
        lg: "1012px",
        md: "768px",
        sm: "544px",
        xs: "320px"
    };
    Cssville.generators = [
        new alignContentGenerator_1.AlignContentGenerator("align-content"),
        new alignItemsGenerator_1.AlignItemsGenerator("align-items"),
        new borderRadiusGenerator_1.BorderRadiusGenerator("border-radius"),
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
    return Cssville;
}());
exports["default"] = Cssville;
