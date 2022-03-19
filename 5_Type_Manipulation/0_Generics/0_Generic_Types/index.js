"use strict";
exports.__esModule = true;
// 定义
function identify(arg) {
    return arg;
}
// 使用
var output1 = identify("hello");
var output2 = identify("hello"); // 自动推断
// 数组
function loggingIdentify(arg) {
    console.log(arg.length);
    return arg;
}
/**
 * Generic Types
 */
var myIdentify = identify;
// 实际会自动推断
// let myIdentify2: <Type>(arg: Type) => Type
var myIdentify2 = identify;
// 可以使用其它名称，无论是generic type 还是 形参名
var myIdentify3 = identify;
// 还可以使用 object literal type的 call signature
// let myIdentify4: <Type>(arg: Type) => Type
var myIdentify4 = identify;
var myIdentify5 = identify;
// 需显示传递Type具体类型。注意和原先Type作为call signature时的区别，那样不用显示声明，这个要
var myIdentify6 = identify;
