"use strict";
exports.__esModule = true;
var VarBase_1 = require("../VarBase");
var CssvilleShadow = /** @class */ (function () {
    function CssvilleShadow() {
    }
    var _a;
    _a = CssvilleShadow;
    CssvilleShadow.xl = new VarBase_1.VarBase("xl", "shadow", "0px 12px 28px 0px");
    CssvilleShadow.lg = new VarBase_1.VarBase("lg", "shadow", "0px 8px 24px 0px");
    CssvilleShadow.md = new VarBase_1.VarBase("md", "shadow", "0px 6px 12px 0px");
    CssvilleShadow.sm = new VarBase_1.VarBase("sm", "shadow", "0px 3px 6px 0px");
    CssvilleShadow.xs = new VarBase_1.VarBase("sm", "shadow", "0px 1px 1px 0px");
    CssvilleShadow.vars = [
        _a.xl,
        _a.lg,
        _a.md,
        _a.sm,
        _a.xs,
    ];
    return CssvilleShadow;
}());
exports["default"] = CssvilleShadow;
