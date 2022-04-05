export {};

//
// NonNullable<Type>
// 删除Type中null和undefined 生成 新的类型

// type T0 = string | number
type T0 = NonNullable<string | number | undefined | null>;
