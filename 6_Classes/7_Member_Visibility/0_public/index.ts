export {};

class Greeter {
  // 不写public也行，因为默认就是public。显示写public往往是代码风格或为了可读性
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
