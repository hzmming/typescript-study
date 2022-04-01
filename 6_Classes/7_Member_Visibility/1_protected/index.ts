export {};

// 1. 基本
class Greeter {
  public greet() {
    console.log("hello" + this.getName());
  }
  // 只能在父类自己内部 和 子类内部使用
  protected getName() {
    return "hi";
  }
}
class SpecialGreeter extends Greeter {
  public howdy() {
    console.log("howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet();
// Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.ts(2445)
g.getName();

// 2. 曝光protected member（将protected变成public）
// 子类继承中，只能将protected变成public，其余全部报错！！！
class Base {
  protected m = 10;
}
class Derived extends Base {
  // public m = 15;
  m = 15;
}
const d = new Derived();
console.log(d.m); // 不会报错，因为已经变成public属性了

// 3. Cross-hierarchy protected access
class B {
  protected x: number = 1;
}
class D1 extends B {
  protected x: number = 5;
}
class D2 extends B {
  f1(other: D2) {
    // (1) 在D2内部，可以操作另一个D2类实例的protected属性
    other.x = 10;
  }
  f2(other: B) {
    // ERROR!!!
    // (2) 在D2内部，即使是父类实例的protected属性，也不能操作！！！
    // Property 'x' is protected and only accessible through an instance of class 'D2'. This is an instance of class 'B'.ts(2446)
    other.x = 10;
  }
}
