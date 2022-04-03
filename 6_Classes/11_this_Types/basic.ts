export {};

// 1. 基本
class Box {
  contents: string = "";
  // 注意，返回类型并不是 Box，而是this，它会动态指向当前类，即：此时this === Box。那和直接写 Box 有什么区别吗？见下面第2点
  // (method) Box.set(value: string): this
  set(value: string) {
    this.contents = value;
    return this;
  }
}
class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}
const a = new ClearableBox();
// const b: ClearableBox
const b = a.set("hello");

// 2. 作为参数类型使用
class BoxTwo {
  content: string = "";
  // 如果写 other: BoxTwo 会怎样呢？？？
  sameAs(other: this) {
    return other.content === this.content;
  }
}
class DerivedBox extends BoxTwo {
  otherContent: string = "?";
}
const base = new Box();
const derived = new DerivedBox();
// 这就是区别，此时sameAs只接收 DerivedBox，如果前面写的是 other: Box，那么父类也可以传进来
// ERROR!!!
derived.sameAs(base); // (method) BoxTwo.sameAs(other: DerivedBox): boolean
