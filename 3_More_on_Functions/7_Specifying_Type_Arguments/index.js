"use strict";
exports.__esModule = true;
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// ERROR!!!
// Type 'string' is not assignable to type 'number
// const arr = combine([1, 2, 3], ["hello", "world"]);
// Success
// const arr: (string | number)[]
var arr = combine([1, 2, 3], ["hello", "world"]);
