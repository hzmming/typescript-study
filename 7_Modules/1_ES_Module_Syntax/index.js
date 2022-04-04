"use strict";
//
// 关于 JavaScript 的 module 语法，这里就不再赘述
// 此处补充下 TypeScript 补充部分
exports.__esModule = true;
// 1. import 类型（就和JS导入属性一样，直接混着用了。而且也支持默认导入）
var animal_1 = require("./vendor/animal");
console.log(animal_1.fish);
