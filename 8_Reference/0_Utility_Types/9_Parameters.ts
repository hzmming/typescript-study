export {};

//
// Parameters<Type>
// 获取 函数Type 中所使用的 参数 作为新的类型，生成 tuple type

declare function f1(arg: { a: number; b: number }): void;

// type T0 = []
type T0 = Parameters<() => string>;

// type T1 = [s: string]
type T1 = Parameters<(s: string) => void>;

// 遇到类型为泛型，则取unknown
// type T2 = [arg: unknown]
type T2 = Parameters<<T>(arg: T) => T>;

// type T3 = [arg: {
//   a: number;
//   b: number;
// }]
type T3 = Parameters<typeof f1>;

// any则固定返回 unknown[]
// type T4 = unknown[]
type T4 = Parameters<any>;

// never则固定返回never
// type T5 = never
type T5 = Parameters<never>;

// 非any、never之外的 非函数类型，tsc直接报错
// Type 'string' does not satisfy the constraint '(...args: any) => any'.ts(2344)
type T6 = Parameters<string>;

// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.ts(2344)
type T7 = Parameters<Function>;
