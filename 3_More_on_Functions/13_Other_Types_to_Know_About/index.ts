/**
 * void
 */
// The inferred return type is void
function noop() {
  return;
}

/**
 * object
 */
let a: object = () => {};

/**
 * unknown
 */
function f1(a: any) {
  a.b();
}
function f2(a: unknown) {
  // ERROR!!!
  // 无法操作unknown属性
  // a.b();

  // 使用条件判断narrow，还是可以用的
  if (typeof a === "function") {
    a();
  }

  // 也可以强转随心所欲
  (a as Function)();
  (a as string).toLowerCase();

  // 强转any
  (a as any)++;
  
  // any接收
  let b: any = a;
  b.random = "hello world";
}
function safeParse(s: string): unknown {
  // JSON.parse 返回 any
  return JSON.parse(s);
}
const obj = safeParse("{a: 3}");
// ERROR!!!
// obj.a

/**
 * never
 * 作为 function 的返回类型，表示抛异常或终止程序运行
 */
function fail(msg: string): never {
  throw new Error(msg);
}

/**
 * Function
 */
function doSth(f: Function) {
  // let a: any
  let a = f(1, 2, 3);
}

export {};
