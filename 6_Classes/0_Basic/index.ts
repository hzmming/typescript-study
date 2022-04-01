export {};

class Point {
  // strict模式下(strictPropertyInitialization: true)，属性必须初始化值或者在constructor里赋值，否则报错
  x: number; // ctor赋值
  y: number; // ctor赋值
  radius: number = 5; // 给定默认值
  name!: string; // 使用 `!` 表示肯定不会为空，tsc不报错
  readonly type = "circle"; // 只读

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
