export {};

// 使用 `as` 取别名

// Capitalize<T> 内置类型，接收字符串类型，用于大写首字母
// Property in keyof Type可能是 number | string | symbol
// string & Property，过滤并返回string类型（应该是这样理解吧~~）
// prettier-ignore
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }
type LazyPerson = Getters<Person>;

// 返回never类型，可过滤某个属性
type RemoveKindField<Type> = {
  // 如果这样直接写never，将过滤掉所有属性
  // [Property in keyof Type as never]: Type[Property];
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};
interface Circle {
  kind: "circle";
  radius: number;
}
// type KindlessCircle = {
//   radius: number;
// }
type KindlessCircle = RemoveKindField<Circle>;

// 传递 union type
type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};
type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };
// 使用 `|` union类型，会将每个类型的map结合合并到一个类型里
// type Config = {
//   square: (event: SquareEvent) => void;
//   circle: (event: CircleEvent) => void;
// }
type Config = EventConfig<SquareEvent | CircleEvent>;
