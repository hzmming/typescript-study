// 定义
function identify<Type>(arg: Type): Type {
  return arg;
}

// 使用
let output1 = identify<string>("hello");
let output2 = identify("hello"); // 自动推断

// 数组
function loggingIdentify<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

/**
 * Generic Types
 */

let myIdentify: <Type>(arg: Type) => Type = identify;
// 实际会自动推断
// let myIdentify2: <Type>(arg: Type) => Type
let myIdentify2 = identify;

// 可以使用其它名称，无论是generic type 还是 形参名
let myIdentify3: <Input>(param: Input) => Input = identify;

// 还可以使用 object literal type的 call signature
// let myIdentify4: <Type>(arg: Type) => Type
let myIdentify4: { <Type>(arg: Type): Type } = identify;

// 将 object literal type 写成interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
let myIdentify5: GenericIdentityFn = identify;

// 将泛型移到整个interface最外层，这样interface的其它成员也可以共用到此泛型
interface GenericIdentityFnOut<Type> {
  (arg: Type): Type;
}
// 需显示传递Type具体类型。注意和原先Type作为call signature时的区别，那样不用显示声明，这个要
let myIdentify6: GenericIdentityFnOut<string> = identify;

/**
 * Generic Classes
 */
class GenericNumber<NumType> {
  /**
   * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization
   * typescript 有个限制,class的所有属性，必须都要初始化，有两种方式：
   *  1. 使用property initializer（也就是定义class属性时，直接赋予默认值
   *  2. 在constructor构造函数中赋值
   *
   * 上面是官网的介绍，但我查资料时发现，使用“!”非空符号也能通过编译！！！（往下面的zeroValue和add后面加个感叹号就知道了）
   */
  // ERROR!!!
  // 虽然会报错，但官方demo没管，可能是不影响教学吧~
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 使用其它类型
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "hello"));

/**
 * Generic Constraints
 */
interface Lengthwise {
  length: number;
}
function loggingIdentify2<Type extends Lengthwise>(arg: Type): Type {
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
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
const x = { a: 1, b: 2 };
getProperty(x, "a");
// ERROR!!!
// Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
getProperty(x, "c");

/**
 * Using Class Types in Generics
 */
// 工厂函数
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
/**
 * ERROR!!!
 * 一样会报 strict-class-initialization 错误。解决方法见前面
 */
// 引入 class type
class BeeKeeper {
  hasMask: boolean;
}
class ZooKeeper {
  nametag: string;
}
class Animal {
  numLegs: number;
}
class Bee extends Animal {
  keeper: BeeKeeper;
}
class Lion extends Animal {
  keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

export {};
