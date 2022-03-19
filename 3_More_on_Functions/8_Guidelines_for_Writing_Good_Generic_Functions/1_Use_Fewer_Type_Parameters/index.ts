// 推荐！
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

const test = [1, 2, 3];
// let result1: number
let result1 = filter1(test, (i) => !!i);
// let result2: number
let result2 = filter2(test, (i) => !!i);

result1 = filter1<number>(test, (i) => !!i);
// 需要多声明一个泛型。而这完全可以由方法封装者内部处理，不用暴露给用户
result2 = filter2<number, (args: number) => boolean>(test, (i) => !!i);

export {};
