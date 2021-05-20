"use strict";
exports.__esModule = true;
function paintShape(opts) {
    // let a: number | undefined
    var a = opts.xPos;
    // ERROR!!!
    // a.toFixed();
    // let b: number;
    var b = opts.xPos !== undefined ? opts.xPos : 0;
    b.toFixed();
}
var shape = getShape();
paintShape({ shape: shape });
paintShape({ shape: shape, xPos: 100 });
paintShape({ shape: shape, yPos: 100 });
paintShape({ shape: shape, xPos: 100, yPos: 100 });
// 可以使用解构加默认值来避免 undefined
function paintShape2(_a) {
    var shape = _a.shape, _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    // let a: number
    var a = xPos;
}
