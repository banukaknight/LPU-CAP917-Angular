"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    } //end constructor
    Point.prototype.draw = function () {
        console.log("x=" + this.x + ", y=" + this.y);
    };
    return Point;
}()); //end class
exports.Point = Point;