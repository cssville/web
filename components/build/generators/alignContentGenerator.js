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
exports.AlignContentGenerator = void 0;
var cssClassData_1 = require("../data/cssClassData");
var GeneratorBase_1 = require("../GeneratorBase");
var AlignContentGenerator = /** @class */ (function (_super) {
    __extends(AlignContentGenerator, _super);
    function AlignContentGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfixValuesMap = new Map([
            ["first-baseline", ["first baseline"]],
            ["last-baseline", ["last baseline"]],
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        _this.list = ["center", "start", "end", "flex-start", "flex-end", "normal",
            "baseline", "space-between", "space-around", "space-evenly", "stretch", "inherit", "initial",
            "revert", "revert-layer", "unset"];
        _this.cssData = [
            new cssClassData_1.CssClassData("align-content", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], _this.list, _this.postfixValuesMap)
        ];
        return _this;
    }
    return AlignContentGenerator;
}(GeneratorBase_1.GeneratorBase));
exports.AlignContentGenerator = AlignContentGenerator;
