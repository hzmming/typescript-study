// index signature property type，只能是 string 或者 number。
// 其实没明白为什么要有number类型，因为 JavaScript 中， number index 实际上是被转成 string index的。即：test[1] === test['1']
interface StringArray {
  [index: number]: string;
}
declare function getStringArray(): StringArray;

const myArray: StringArray = getStringArray();
// const secondItem: string
const secondItem = myArray[1];

// 可以同时使用两种类型的index。因为 JavaScript 中， number index 实际上是被转成 string index的。
// 所以，要求 numeric index 的 type，需和 string index 的 type 保持一致（相同或subType）
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
interface NotOK {
  // ERROR!!!
  // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  // [x: number]: Animal;
  [x: string]: Dog;
}
interface OK {
  [x: number]: Dog;
  [x: string]: Animal;
}

// 因为obj.property等同于obj['property']，所以index signature会约束object type的其它属性
interface NumericDictionary {
  [index: string]: number;
  length: number;
  // ERROR!!!
  // name: string;
}
// 如果是需要多种类型，可使用unit
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

// 添加readonly
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
declare function getReadOnlyStringArray(): ReadonlyStringArray;
let myArray2: ReadonlyStringArray = getReadOnlyStringArray();
// ERROR!!!
// myArray2[1] = "hello";

export {};
