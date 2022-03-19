type Point = { x: number; y: number };
// type P = "x" | "y"
type P = keyof Point;

// index signature
type Arrayish = { [n: number]: unknown };
// type A = number
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
// 因为js的对象属性，数字也会转成字符串，即 obj[0] 等同于 obj["0"]
// type M = string | number
type M = keyof Mapish;

export {};