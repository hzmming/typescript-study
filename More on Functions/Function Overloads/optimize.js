"use strict";
exports.__esModule = true;
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
makeDate(1234567890);
makeDate(6, 6, 6);
