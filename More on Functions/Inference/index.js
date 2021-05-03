"use strict";
exports.__esModule = true;
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
