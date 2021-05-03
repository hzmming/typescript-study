"use strict";
exports.__esModule = true;
function greet(str) {
    console.log("hello", str);
}
greet("Lee");
// 上面的泛型其实是多余的，可以简写成
function greet2(str) {
    console.log("hello", str);
}
greet2("Mai");
