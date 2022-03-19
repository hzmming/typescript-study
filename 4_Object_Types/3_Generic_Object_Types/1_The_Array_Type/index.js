"use strict";
exports.__esModule = true;
// string[] 实际上是 Array<string> 的缩写
var a = ["hello"];
// Array本质上就是个 generic type，需要传递一个参数
var b = ["world"];
// Array构造函数
var c = new Array("hello", "world");
// let d: any[]
var d = [];
var e = [];
// ERROR!!!
e = [1];
var f = [];
f = [1];
