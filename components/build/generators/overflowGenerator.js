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
exports.OverflowGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var OverflowGenerator = /** @class */ (function (_super) {
    __extends(OverflowGenerator, _super);
    function OverflowGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ["visible", "hidden", "scroll", "auto"];
        _this.cssData = [
            new cssClassData_1.CssClassData("overflow", ["overflow"], _this.list),
            new cssClassData_1.CssClassData("overflow-x", ["overflow-x"], _this.list),
            new cssClassData_1.CssClassData("overflow-y", ["overflow-y"], _this.list),
        ];
        return _this;
    }
    return OverflowGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.OverflowGenerator = OverflowGenerator;
