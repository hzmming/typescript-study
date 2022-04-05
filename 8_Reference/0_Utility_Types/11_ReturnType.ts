export {};

//
// ReturnType<Type>
// 获取函数Type的返回type 作为新type

declare function f1(): { a: number; b: string };

// type T0 = string
type T0 = ReturnType<() => string>;

// type T1 = void
type T1 = ReturnType<(s: string) => void>;

// type T2 = unknown
type T2 = ReturnType<<T>() => T>;

// type T3 = number[]
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;

// type T4 = {
//   a: number;
//   b: string;
// }
type T4 = ReturnType<typeof f1>;

// 这里和Parameters、ConstructorParameters不一样
// type T5 = any
type T5 = ReturnType<any>;

// type T6 = never
type T6 = ReturnType<never>;

// 非any、never之外的 函数类型，tsc直接报错
type T7 = ReturnType<string>;

type T8 = ReturnType<Function>; // TODO 好吧，我有点没明白，这个Function为什么会报错了~~
