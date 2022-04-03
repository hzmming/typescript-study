export {};
class Params {
  // 1. 直接在构造函数的形参声明 public/protected/private，tsc会将这些参数定义为class property
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // 空空如也
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);
// Property 'z' is private and only accessible within class 'Params'.ts(2341)
console.log(a.z);

// => js代码如下

// class Params {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//     // 空空如也
//   }
// }
