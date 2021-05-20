"use strict";
exports.__esModule = true;
function doSth(pair) {
    // const a: string
    var a = pair[0];
    // const b: number
    var b = pair[1];
    // ERROR!!!
    // 越界了，pair数组只有2个元素。（与之相比，普通的array长度是不受限的）
    // pair[2];
    // 解构
    // const inputStr: string
    // const inputNum: number
    var inputStr = pair[0], inputNum = pair[1];
}
doSth(["hello", 1]);
var pair = ["hello", 2];
pair.pop();
function setCoordinate(coord) {
    var x = coord[0], y = coord[1], z = coord[2];
    // ERROR!!!
    // z可能为undefined
    // console.log(z.toString())
    // 数组长度不定
    console.log(coord.length); // (property) length: 2 | 3
    // ERROR!!!
    // coord长度只可能是2或者3
    /* if (coord.length === 4) {
      // ...
    } */
}
// ERROR!!!
// 缺了个number类型
// const a: StringNumberBooleans = ["hello"];
// Success
var b = ["hello", 1];
var c = ["hello", 1, true];
var d = ["hello", 1, true, true];
// 与ES6的rest有点不一样，es6的rest只能是最后一个参数，而type rest可以任意位置
var e = ["hello", 1];
var f = ["hello", true, 1];
var g = ["hello", true, true, 1];
// 结合es6的rest，可以省去多余的变量命名（没怎么看明白，不知道有没有理解错误）
function readButtonInput() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var input = args.slice(2);
    console.log(input.length);
}
// 等价于
function readButtonInput2(name, version) {
    var input = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        input[_i - 2] = arguments[_i];
    }
    console.log(input.length);
}
