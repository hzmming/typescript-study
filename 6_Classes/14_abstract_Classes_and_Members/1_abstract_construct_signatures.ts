export {};

// 问题：接收一个class constructor并实例化，该class constructor为所有实现抽象类的子类

abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("hello, " + this.getName());
  }
}
class Derived extends Base {
  getName(): string {
    return "world";
  }
}

//
// 1. 错误示范！！！
function greetError(ctor: typeof Base) {
  // ERROR!!!
  // 之所以报错，是因为 typeof Base 不仅能接收其子类，同样也可以接收其自己Base，而Base作为抽象类，是不能new实例化的
  // Cannot create an instance of an abstract class.ts(2511)
  const instance = new ctor();

  instance.printName();
}

//
// 2. 正确示范！！！
function greetSuccess(ctor: new () => Base) {
  const instance = new ctor();

  instance.printName();
}
greetSuccess(Derived);
greetSuccess(Base); // tsc 会校验提示错误
