"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
        this.y = 10;
    }
    // methods方法 和 外部函数定义一样
    Point.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    Point.prototype["do"] = function (x, y) {
        return "TBD";
    };
    return Point;
}());
