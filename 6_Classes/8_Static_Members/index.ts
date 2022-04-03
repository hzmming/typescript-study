export {};

// 1. 基本
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

// 2. 结合visibility
class MyClassTwo {
  private static x = 0;
}
// ERROR!!!
// Property 'x' is private and only accessible within class 'MyClassTwo'.ts(2341)
console.log(MyClassTwo.x);

// 3. 继承
class Base {
  static getGreeting() {
    return "hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

// 4. 一些特殊的名称不能用。像 name、length、call等
class S {
  // ERROR!!!
  // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.ts(2699)
  static name = "s";
}

// TODO 5. 为什么没有 static class ?
// TODO 6. static Blocks in Classes