export {};

// 如果给定的类型为 union type，将会distributive（不知道咋翻译，类似数学的乘法分配率）
type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>;

// 如果不想应用乘法分配率也行，使用[]包裹
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// type StrArrOrNumArr2 = (string | number)[]
type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
