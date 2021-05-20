"use strict";
exports.__esModule = true;
function doSth(pair) {
    // ERROR!!!
    // 不能修改
    pair[1] = 1;
}
// tuple适用的场景一般是不进行修改的，所以尽可能默认声明为readonly
// 使用 `as const`，则 point 被推断为 tuple type
var point = [3, 4];
function distanceFromOrigin(_a) {
    var x = _a[0], y = _a[1];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
// ERROR!!!
// The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]
distanceFromOrigin(point);
