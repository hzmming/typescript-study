export {};

// private 只能在类内部使用，即使子类也不能操作！！！
class Base {
  private x = 0;
}
const b = new Base();
// ERROR!!!
// Property 'x' is private and only accessible within class 'Base'.ts(2341)
console.log(b.x);

class Derived extends Base {
  showX() {
    // Property 'x' is private and only accessible within class 'Base'.ts(2341)
    console.log(this.x);
  }
}

// 无法将private改成其它可见性
// Class 'Derived2' incorrectly extends base class 'Base'.
// Property 'x' is private in type 'Base' but not in type 'Derived2'.ts(2415)
class Derived2 extends Base {
  x = 1;
}

// 在类内部，可以获取同类其它实例的private属性
class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

// 注意： 无论是protected还是private，都是tsc 编译时校验，不影响最终的runtime
// 所以，下面这种写法还是能逃过tsc的校验
class MySafe {
  private secretKey = 12345;
}
const s = new MySafe();
// ERROR!!!
// Property 'secretKey' is private and only accessible within class 'MySafe'.ts(2341)
s.secretKey;
// OK
s["secretKey"];
