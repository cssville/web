"use strict";
exports.__esModule = true;
var VarBase_1 = require("../VarBase");
var CssvilleBreakpoints = /** @class */ (function () {
    function CssvilleBreakpoints() {
    }
    var _a;
    _a = CssvilleBreakpoints;
    CssvilleBreakpoints.xs = new VarBase_1.VarBase("breakpoint", "xs", "320px");
    CssvilleBreakpoints.sm = new VarBase_1.VarBase("breakpoint", "sm", "544px");
    CssvilleBreakpoints.md = new VarBase_1.VarBase("breakpoint", "md", "768px");
    CssvilleBreakpoints.lg = new VarBase_1.VarBase("breakpoint", "lg", "1012px");
    CssvilleBreakpoints.xl = new VarBase_1.VarBase("breakpoint", "xl", "1280px");
    CssvilleBreakpoints.breakpoints = [
        _a.xs,
        _a.sm,
        _a.md,
        _a.lg,
        _a.xl,
    ];
    return CssvilleBreakpoints;
}());
exports["default"] = CssvilleBreakpoints;
