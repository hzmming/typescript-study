"use strict";
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
    var b = a;
    b.x = 4;
}
function safeParse(s) {
    // JSON.parse 返回 any
    return JSON.parse(s);
}
