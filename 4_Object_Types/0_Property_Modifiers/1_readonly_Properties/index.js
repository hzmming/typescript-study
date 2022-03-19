"use strict";
exports.__esModule = true;
function doSth(obj) {
    // ERROR!!!
    // obj.prop = "hello";
}
function doOtherSth(param) {
    // ERROR!!!
    // param.obj = "hello";
    param.obj.prop = "hello";
}
var readonlyPerson = {
    name: "Lory",
    age: 27
};
// ERROR!!!
// readonlyPerson.age = 18;
var writablePerson = readonlyPerson;
writablePerson.age = 18;
console.log(readonlyPerson.age); // 18
