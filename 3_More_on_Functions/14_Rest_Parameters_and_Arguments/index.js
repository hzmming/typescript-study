"use strict";
exports.__esModule = true;
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (i) { return i * n; });
}
var a = multiply(10, 1, 2, 3, 4);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
