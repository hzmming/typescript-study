type SomeObject = any;

/**
 * 等价于
 * interface SomeConstructor {
 *  new (s: string): SomeObject;
 * }
 * 不再赘述
 */
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

/**
 * 结合函数，作为形参，有两种形式，均可
 * 1. object literal type 中声明
 * 2. 箭头写法
 */
function createInstance(ctor: { new (): SomeObject }) {
  // (parameter) ctor: new () => SomeObject
  return new ctor();
}
function createInstance2(ctor: new () => SomeObject) {
  // (parameter) ctor: new () => SomeObject
  return new ctor();
}

export {};
