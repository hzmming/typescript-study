"use strict";
exports.__esModule = true;
function filter1(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
var test = [1, 2, 3];
var result1 = filter1(test, function (i) { return !!i; });
var result2 = filter2(test, function (i) { return !!i; });
result1 = filter1(test, function (i) { return !!i; });
result2 = filter2(test, function (i) { return !!i; });
