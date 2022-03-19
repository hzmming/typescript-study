"use strict";
exports.__esModule = true;
var a = ["hello", "world"];
// ERROR!!!
// 只读数组，不存在push方法
a.push("233");
// ERROR!!!
// 也不能改值
a[0] = "bob";
// ReadonlyArray 同样有缩写
var b = ["hello", "world"];
// ERROR!!!
// 只读数组，不存在push方法
b.push("233");
// ERROR!!!
// ReadonlyArray没有构造函数（Array是有的）
new ReadonlyArray("hello", "world");
// ReadonlyArray的优点，结合函数，让调用者放心地传数组进来，本函数不会修改他的数据
function doStuff(values) {
    // 可以读
    var copy = values.slice();
    console.log("The first value is " + copy[0]);
    // ERROR!!!
    // 但不能改
    values.push(123);
}
// Array可以赋值给ReadonlyArray，而ReadonlyArray却不能赋值给Array。
// 因为要保证 ReadonlyArray 不被修改
var x = [];
var y = [];
// Success
y = x;
// ERROR!!!
x = y;
