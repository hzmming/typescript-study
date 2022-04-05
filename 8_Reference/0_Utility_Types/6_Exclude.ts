export {};

//
// Exclude<UnionType, ExcludedMembers>
// 做差集
// 通过删除 union type 中的成员来创建新的类型
// 和 Omit 的区别是，Omit用于删除对象，而Exclude删除集合

// type T0 = "b" | "c"
type T0 = Exclude<"a" | "b" | "c", "a">;

// type T1 = "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// type T2 = string | number
type T2 = Exclude<string | number | (() => void), Function>;
