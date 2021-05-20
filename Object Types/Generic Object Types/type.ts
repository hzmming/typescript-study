// type alias 同样也支持
type Box<Type> = {
  contents: Type;
};

// 而且因为type支持操作符，还可以实现如下效果
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

export {};
