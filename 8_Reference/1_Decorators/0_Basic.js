"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
//
// Decorators（装饰器）
// 语法: @expression
// 和 class 结合使用，有5个地方可以使用
// 1. class declaration 类装饰器
// 2. method 方法装饰器
// 3. accessor 属性访问器装饰器
// 4. property 属性装饰器
// 5. parameter 方法参数装饰器
function log(target) {
    console.log(target);
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person = __decorate([
        log
    ], Person);
    return Person;
}());
