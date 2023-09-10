"use strict";
exports.__esModule = true;
exports.VarBase = void 0;
var VarBase = /** @class */ (function () {
    function VarBase(category, name, value) {
        this.category = "";
        this.name = "";
        this.value = "";
        this.category = category;
        this.name = name;
        this.value = value;
        this.varName = "--cssville-".concat(name, "-").concat(category);
        this["var"] = "var(".concat(this.varName, ")");
        this.css = "".concat(this.varName, ": ").concat(value, ";");
        this.postfixValue = [this.name, [this["var"]]];
    }
    return VarBase;
}());
exports.VarBase = VarBase;
