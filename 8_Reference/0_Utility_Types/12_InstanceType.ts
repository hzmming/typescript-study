export {};

// InstanceType<Type>
// 使用构造函数类型 constructor function 创建实例类型

class C {
  x = 0;
  y = 0;
}

// type T0 = C
type T0 = InstanceType<typeof C>;

// type T1 = any
type T1 = InstanceType<any>;

// type T2 = never
type T2 = InstanceType<never>;

type T3 = InstanceType<new () => void>;

// 非any、never之外的 构造函数类型，tsc直接报错
type T4 = InstanceType<string>;

type T5 = InstanceType<Function>;
