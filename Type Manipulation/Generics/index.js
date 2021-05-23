"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
 * Generic Classes
 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
// 使用其它类型
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "hello"));
function loggingIdentify2(arg) {
    console.log(arg.length);
    return arg;
}
// ERROR!!!
// 没有length
loggingIdentify2(3);
// Success
loggingIdentify2({ length: 2, value: 3 });
/**
 * Using Type Parameters in Generic Constraints
 */
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2 };
getProperty(x, "a");
// ERROR!!!
// Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
getProperty(x, "c");
/**
 * Using Class Types in Generics
 */
// 工厂函数
function create(c) {
    return new c();
}
// 引入 class type
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
