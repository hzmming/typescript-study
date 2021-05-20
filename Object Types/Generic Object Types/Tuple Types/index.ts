// 明确表示该类型的数组只有2个元素，且第一个元素为string类型，第二个元素为number类型
type StringNumberPair = [string, number];

function doSth(pair: [string, number]) {
  // const a: string
  const a = pair[0];
  // const b: number
  const b = pair[1];

  // ERROR!!!
  // 越界了，pair数组只有2个元素。（与之相比，普通的array长度是不受限的）
  // pair[2];

  // 解构
  // const inputStr: string
  // const inputNum: number
  const [inputStr, inputNum] = pair;
}
doSth(["hello", 1]);

// 简单的tuple可以通过interface模拟
interface IStringNumberPair {
  length: 2;
  0: string;
  1: number;

  // 一些array数组的方法，比如push、pop、slice等等
  slice(start: number, end?: number): Array<string | number>;
  pop: () => string | number | undefined;
  // ...
}
const pair: IStringNumberPair = ["hello", 2];
pair.pop();

// 只能出现在末尾的可选?
// 且长度不定
type test = [number, boolean?, string?];
function func(params: test){
	// (property) length: 1 | 2 | 3
	console.log(params.length);
}


type Either2dOr3d = [number, number, number?];
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;

  // ERROR!!!
  // z可能为undefined
  // console.log(z.toString())

  // 数组长度不定
  console.log(coord.length); // (property) length: 2 | 3
  // ERROR!!!
  // coord长度只可能是2或者3
  /* if (coord.length === 4) {
    // ...
  } */
}

// rest element
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
// ERROR!!!
// 缺了个number类型
// const a: StringNumberBooleans = ["hello"];
// Success
const b: StringNumberBooleans = ["hello", 1];
const c: StringNumberBooleans = ["hello", 1, true];
const d: StringNumberBooleans = ["hello", 1, true, true];
// 与ES6的rest有点不一样，es6的rest只能是最后一个参数，而type rest可以任意位置
const e: StringBooleansNumber = ["hello", 1];
const f: StringBooleansNumber = ["hello", true, 1];
const g: StringBooleansNumber = ["hello", true, true, 1];

// 结合es6的rest，可以省去多余的变量命名（没怎么看明白，不知道有没有理解错误）
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [, , ...input] = args;
  console.log(input.length);
}
// 等价于
function readButtonInput2(name: string, version: number, ...input: boolean[]) {
  console.log(input.length);
}

export {};
