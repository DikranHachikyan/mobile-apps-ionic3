"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y, marker, visible) {
        this.x = x;
        this.y = y;
        this.marker = marker;
        this.visible = visible;
    }
    Point.prototype.show = function () {
        var text = "Point:x=" + this.x + " \n y=" + this.y + " \n visible=" + this.visible + " \n label=" + this.marker;
        console.log(text);
    };
    return Point;
}());
exports.Point = Point;
