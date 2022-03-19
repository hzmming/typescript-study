"use strict";
exports.__esModule = true;
function greeter(fn) {
    fn("hello");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
