export {}

// 基本
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

// 支持重载
// 1. 构造函数没有泛型type parameter，因为泛型会声明在class上，整个class共用，之后会学到
// 2. 构造函数没有返回类型声明return type annotations，因为构造函数永远返回class instance
class Point2 {
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}

// super call
// 如果有继承类，在构造函数里，使用this前，必须先调用下super();
class Base {
  k = 4;
}
class Derived extends Base {
  constructor() {
    // 不执行这句，或者晚于底下那句，则会抛错哦~
    super();

    console.log(this.k);
  }
}
