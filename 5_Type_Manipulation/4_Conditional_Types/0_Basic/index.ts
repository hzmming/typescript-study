interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

// type Example1 = number
type Example1 = Dog extends Animal ? number : string;
// type Example2 = string
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}
// 不好的例子！！！
function badCreateLabel(id: number): IdLabel;
function badCreateLabel(name: string): NameLabel;
function badCreateLabel(nameOrId: string | number): IdLabel | NameLabel;
function badCreateLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
// 优化
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}
// let a = NameLabel
let a = createLabel("typescript");
// let b = IdLabel
let b = createLabel(2.8);
// let c = IdLabel | NameLabel
let c = createLabel(Math.random() ? "hello" : 42);

export {};
