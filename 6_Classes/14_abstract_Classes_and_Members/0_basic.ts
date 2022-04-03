export {};

// 使用 `abstract` 定义抽象类和抽象成员
// 1. 该类不能被直接实例化
// 2. 抽象成员无需给出具体实现，只需给出声明
// 3. 继承抽象类，必须实现所有抽象成员

abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("hello, " + this.getName());
  }
}

// ERROR!!!
// Cannot create an instance of an abstract class.ts(2511)
const b = new Base();

// Non-abstract class 'ErrorDerived' does not implement inherited abstract member 'getName' from class 'Base'.ts(2515)
class ErrorDerived extends Base {
  // empty
}

// 正确！！！
class Derived extends Base {
  getName(): string {
    return "world";
  }
}
