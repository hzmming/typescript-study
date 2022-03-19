"use strict";
exports.__esModule = true;
function liveDangerously(x) {
    console.log(x.toFixed());
    // 注意区分
    console.log(x === null || x === void 0 ? void 0 : x.toFixed());
}
