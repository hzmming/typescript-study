export {};

// 基本
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
// const b: Box<string>
const b = new Box("hello");

// 静态成员不能使用泛型！！！
// 因为静态类型是所有共享的，Box<string>.defaultValue 和 Box<number>.defaultValue，那defaultValue到底要算什么类型呢？？？
class ErrorBox<Type> {
  // ERROR!!!
  // Static members cannot reference class type parameters.ts(2302)
  static defaultValue: Type;
}
