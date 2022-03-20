// 使用 indexed access type 获取目标Type指定属性的”值类型“
type Person = { age: number; name: string; alive: boolean };

// 使用姿势 TargetType<index type>

// type Age = number
type Age = Person["age"];

// 因为index type本身就是个type，所以可以使用 union、keyof或者其它完整type

// 1. 使用union
// type I1 = string | number
type I1 = Person["age" | "name"];

// 2. 使用keyof（有点valueof的意思）
// type I2 = string | number | boolean
type I2 = Person[keyof Person];

// 3. 使用其它type
type AliveOrName = "alive" | "name";
// type I3 = string | boolean
type I3 = Person[AliveOrName];

// 如果传入的index type不是目标Type的属性，tsc将直接报错！！！
type I4 = Person["alie"]; // Property 'alie' does not exist on type 'Person'.ts(2339)

// 使用[number]获取数组type的元素type
// 注意：虽然js操作数组时，a[0]等同于a['0']，但是，并不像对待对象属性那样，ts的数组下标，类型只能是number！！！

const PersonArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
// type PersonArrayType = {
//   name: string;
//   age: number
// }[]
type PersonArrayType = typeof PersonArray;
// 获取到数组元素的类型
// type PersonType = {
//   name: string;
//   age: number;
// }
type PersonType = PersonArrayType[number];
// 获取数组元素属性的值类型
// type Age1 = number
type Age1 = PersonType["age"];
// 也可以省略掉中间变量，直接这样操作
// type Age2 = number
type Age2 = PersonArrayType[number]["age"];
// 还可以再省！！！
// type Age3 = number
type Age3 = typeof PersonArray[number]["age"];

// 切记，传的是index type，是个ts的type而不是js的value值
// 错误示例！！！
const key = "age";
type Age4 = PersonType[key]; // Type 'any' cannot be used as an index type.ts(2538)
// 正确
type key = "age";
type Age5 = PersonType[key];

export {};
