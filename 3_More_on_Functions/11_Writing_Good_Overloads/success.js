"use strict";
exports.__esModule = true;
// 实际上，根本不需要使用overload
// 返回字符串或数组的长度
function len(x) {
    return x.length;
}
len("hello");
len([1, 2, 3]);
len(Math.random() < 0.5 ? "hello" : [1, 2, 3]);
