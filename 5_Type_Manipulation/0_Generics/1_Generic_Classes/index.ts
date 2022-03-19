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

export {};
