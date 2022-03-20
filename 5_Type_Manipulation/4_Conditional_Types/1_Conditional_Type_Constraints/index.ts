export {};

// 获取泛型属性值类型（有点像是前面学的 indexed access types 和 generic 结合）

// 错误示例！！！
// Type '"message"' cannot be used to index type 'T'.ts(2536)
// type MessageOf<T> = T["message"];

// constrain T
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}
// type EmailMessageContents = string
type EmailMessageContents = MessageOf<Email>;

// 防止报错，如果目标type不存在指定属性，返回默认值为never
type SafeMessageOf<T> = T extends { message: unknown } ? T["message"] : never;
interface Dog {
  bark(): void;
}
// type SafeEmailMessageContents = string
type SafeEmailMessageContents = SafeMessageOf<Email>;
// type SafeDogMessageContents = never
type SafeDogMessageContents = SafeMessageOf<Dog>;

// 写一个Flatten类型，用于拍平数组获取其元素类型，若不是数组则返回其本身
type Flatten<T> = T extends any[] ? T[number] : T;
// type Str = string
type Str = Flatten<string[]>;
// type Num = number;
type Num = Flatten<number>;
