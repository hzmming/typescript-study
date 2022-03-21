export {};

// 在map的过程，使用修饰符改变结果属性。有两个修饰符可以使用
// readonly: 使属性只读
// ?: 使属性可选
// 上面两个修饰符可以搭配 `-` 或 `+` 使用，若没有指定默认则为 `+`

// 比如复制目标类型，创建一个可更改mutable的类型
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
// type UnlockedAccount = {
//   id: string;
//   name: string;
// };
type UnlockedAccount = CreateMutable<LockedAccount>;

// 比如复制目标类型，创建一个不可选的类型
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
// type User = {
//   id: string;
//   name: string;
//   age: number;
// };
type User = Concrete<MaybeUser>;
