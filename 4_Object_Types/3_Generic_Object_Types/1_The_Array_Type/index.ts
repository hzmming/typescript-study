// string[] 实际上是 Array<string> 的缩写
let a: string[] = ["hello"];
// Array本质上就是个 generic type，需要传递一个参数
let b: Array<string> = ["world"];
// Array构造函数
let c: Array<string> = new Array("hello", "world");
// let d: any[]
let d = [];

// 如果定义数组type时没有指明类型，则表示type=[]，也就是说，只能接收空数组[]
type arr = [];
let e: arr = [];
// ERROR!!!
e = [1];

type anyArr = any[];
let f: anyArr = [];
f = [1];

export {};
