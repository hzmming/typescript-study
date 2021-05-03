"use strict";
exports.__esModule = true;
function longest(a, b) {
    // ERROR!!!
    // Property 'length' does not exist on type 'T
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
