"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BorderGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var border_1 = require("../vars/border");
var colors_1 = require("../vars/colors");
var BorderGenerator = /** @class */ (function (_super) {
    __extends(BorderGenerator, _super);
    function BorderGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["1", ["".concat(border_1["default"].width["var"], " solid ").concat(colors_1["default"].border["var"])]],
        ]);
        _this.list = ["none"];
        _this.cssData = [
            new cssClassData_1.CssClassData("border", ["border"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-top", ["border-top"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-bottom", ["border-bottom"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-left", ["border-left"], _this.list, _this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-right", ["border-right"], _this.list, _this.postfixValuesMap),
        ];
        return _this;
    }
    return BorderGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.BorderGenerator = BorderGenerator;
