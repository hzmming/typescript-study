"use strict";
exports.__esModule = true;
function paddingLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
function printAll(strs) {
    if (typeof strs === "object") {
        // ERROR!!!
        // strs is possibly 'null'
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else {
        // ...
    }
}
