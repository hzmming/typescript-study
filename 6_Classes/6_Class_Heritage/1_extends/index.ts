export {};

// 1. 基本
class Animal {
  move() {
    console.log("moving along");
  }
}
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
const dog = new Dog();
// Base class method
dog.move();
// Derived class method
dog.woof(3);

// 2. override 方法
class Base {
  greet() {
    console.log("hello world");
  }
}
class Derived extends Base {
  // ！！！
  // 子类的override方法，必须遵守父类的约束(contracts)，否则报错！！！
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`hello, ${name.toUpperCase()}`);
    }
  }
}
const d = new Derived();
d.greet();
d.greet("reader");

// 3. 使用父class reference接收子类instance
const b: Base = d;
// No problem
b.greet();

// TODO 4. Type-only Field Declarations

// 5. Initialization Order
class B {
  name = "base";
  constructor() {
    console.log("My name is" + this.name);
  }
}
class D extends B {
  name = "derived";
}
const dd = new D();
// 输出 base 而不是 derived
// 执行顺序：
// (1). base class field初始化
// (2). base constructor执行
// (3). derived class field初始化
// (4). derived constructor执行

// TODO 6. Inheriting Built-in Types
