interface SomeType {
  readonly prop: string;
}

function doSth(obj: SomeType) {
  // ERROR!!!
  // obj.prop = "hello";
}

// 和 JavaScript 一样，只读的只是变量本身，值如果为对象，对象的属性还是可以被修改的
interface SomeObjType {
  readonly obj: {
    prop: string;
  };
}
function doOtherSth(param: SomeObjType) {
  // ERROR!!!
  // param.obj = "hello";

  param.obj.prop = "hello";
}

// TypeScript 校验 types 是否 compatible 时，是不考虑是否 readonly 的。而且一旦 readonly type 被 assign 给可写的 type，则值依然能被修改
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
let readonlyPerson: ReadonlyPerson = {
  name: "Lory",
  age: 27,
};
// ERROR!!!
// readonlyPerson.age = 18;
let writablePerson: Person = readonlyPerson;
writablePerson.age = 18;
console.log(readonlyPerson.age); // 18

export {};
