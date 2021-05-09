"use strict";
exports.__esModule = true;
/**
 * void
 */
// The inferred return type is void
function noop() {
    return;
}
/**
 * object
 */
var a = function () { };
/**
 * unknown
 */
function f1(a) {
    a.b();
}
function f2(a) {
    // ERROR!!!
    // 无法操作unknown属性
    // a.b();
    // 转成any还是可以随心所欲~~
    var b = a;
    b.random = "hello world";
}
function safeParse(s) {
    // JSON.parse 返回 any
    return JSON.parse(s);
}
var obj = safeParse("{a: 3}");
// ERROR!!!
// obj.a
/**
 * never
 * 作为 function 的返回类型，表示抛异常或终止程序运行
 */
function fail(msg) {
    throw new Error(msg);
}
/**
 * Function
 */
function doSth(f) {
    // let a: any
    var a = f(1, 2, 3);
}
