export {};

class Point {
  x = 10;
  y = 10;

  // methods方法 和 外部函数定义一样
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }

  // 支持overload
  do(x: number, y: number): number;
  do(x: number): string;
  do(x: number, y?: number): string | number {
    return "TBD";
  }
}
