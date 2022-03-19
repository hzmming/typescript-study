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

export {};
