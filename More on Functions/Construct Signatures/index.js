"use strict";
exports.__esModule = true;
function fn(ctor) {
    return new ctor("hello");
}
/**
 * 结合函数，作为形参
 */
function createInstance(ctor) {
    return new ctor();
}
function createInstance2(ctor) {
    return new ctor();
}
