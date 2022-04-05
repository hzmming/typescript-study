export {};

//
// ConstructorParameters<Type>
// 获取 构造函数Type 中所使用的 参数 作为新的类型，生成 tuple type
// 和 Parameters 类似，只不过处理的是构造函数constructor function

// type T0 = [message?: string | undefined]
type T0 = ConstructorParameters<ErrorConstructor>;

// type T1 = string[]
type T1 = ConstructorParameters<FunctionConstructor>;

// type T2 = [pattern: string | RegExp, flags?: string | undefined]
type T2 = ConstructorParameters<RegExpConstructor>;

// type T3 = unknown[]
type T3 = ConstructorParameters<any>;

// type T4 = never
type T4 = ConstructorParameters<never>;

// 非any、never之外的 非构造函数类型，tsc直接报错
type T5 = ConstructorParameters<Function>; // js的构造函数也是普通函数，只不过调用方式用new而已。看样子ts专门区分开了，FunctionConstructor 和 Function
