export {};

// 上一节实现的 Flatten 类型，还可以这样实现
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// 实现一个自己的ReturnType类型
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
// type Num = number
type Num = GetReturnType<() => number>;
// type Str = string
type Str = GetReturnType<(x: string) => string>;
// type Bools = boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// 如果要infer推断有多个call signatures的类型（如函数重载），ts会取最后一个signature，因为最后一个signature往往catch-all case
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
// type T1 = string | number
type T1 = GetReturnType<typeof stringOrNum>;
