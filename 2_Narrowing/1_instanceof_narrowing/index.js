"use strict";
exports.__esModule = true;
function logVal(x) {
    if (x instanceof Date) {
        // (parameter) x: Date
        console.log(x.toUTCString());
    }
    else {
        // (parameter) x: string
        console.log(x.toUpperCase());
    }
}
