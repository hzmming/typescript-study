export {};

// TypeScript 内置了一些types，用于方便地操作字符串，比如 Uppercase、Lowercase、Capitalize、Uncapitalize
// 出于性能考虑，这些类型都是内置到compiler里，所以在 `.d.ts` 里面是看不到具体实现的
// 随便一个IDE，vscode或webstorm，command/ctrl + 点击，跳转至 lib.es5.d.ts 文件
// 只能看到这样：type Uppercase<S extends string> = intrinsic;
// 像 `ReturnType` 就看得到，长这样：type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// Uppercase<StringType>
type Greeting = "hello, World";
type UpperGreeting = Uppercase<Greeting>; // type UpperGreeting = "HELLO, WORLD"

// Lowercase<StringType>
type LowerGreeting = Lowercase<Greeting>; // type LowerGreeting = "hello, world"

// Capitalize<StringType>
type CapitalizeGreeting = Capitalize<Greeting>; // type CapitalizeGreeting = "Hello, World"

// Uncapitalize<StringType>
type UncapitalizeGreeting = Uncapitalize<CapitalizeGreeting>; // type UncapitalizeGreeting = "hello, World"
