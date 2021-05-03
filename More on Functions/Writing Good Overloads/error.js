"use strict";
exports.__esModule = true;
function len(x) {
    return x.length;
}
len("hello");
len([1, 2, 3]);
// 看似正常，但不支持使用一个可能是字符串也可能是数组的值调用
// ERROR!!!
len(Math.random() < 0.5 ? "hello" : [1, 2, 3]);
