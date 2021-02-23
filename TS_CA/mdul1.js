"use strict";
exports.__esModule = true;
exports.Calc = void 0;
//class definition
var Calc = /** @class */ (function () {
    //constructor
    function Calc(x, y) {
        this.v1 = x;
        this.v2 = y;
    }
    //function-declare-sqr
    Calc.prototype.sqr = function () {
        console.log("The square of first value: " + this.v1 * this.v1);
    };
    //function-declare-cube
    Calc.prototype.cube = function () {
        console.log("The cube of second value: " + this.v2 * this.v2 * this.v2);
    };
    return Calc;
}());
exports.Calc = Calc;
