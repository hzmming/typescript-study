// 示例1
function output<T>(a: T): T{
	return a;
}
let x = output(1);
let y = output('hello');


// 示例2
function firstElement<Type>(arr: Type[]): Type{
	return arr[0];
}
// let a: string
let a = firstElement(["hello", "world"]);
// let b: number
let b = firstElement([0, 1]);

export {};