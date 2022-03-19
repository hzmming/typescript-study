// js语法
console.log(typeof "hello world");

// 声明类型时，使用typeof引用已有变量或属性的类型
let s = "hello";
// let n: string
let n: typeof s;

// 用在普通类型上面没啥作用，与其它 type operators 结合使用比较有用
// 比如结合TS预定义的 ReturnType<T>，先简单的看下这个东西的作用
type Predicate = (x: unknown) => boolean;
// type K = boolean
type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}
// 错误示例！！！
// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?ts(2749)
// f 是一个值value，并是类型type
type P1 = ReturnType<f>;
// 正确示例
// type P2 = {
//   x: number;
//   y: number;
// }
type P2 = ReturnType<typeof f>;

// 限制
// typeof 只能用在标识符identifiers上（比如变量名、函数名、属性名）
declare const msgbox: () => boolean;
// 错误示例！！！
let shouldContinue: typeof msgbox("Are you sure you want to continue?"); // ',' expected.ts(1005)

export {};
