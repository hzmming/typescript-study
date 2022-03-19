// function firstElement1<Type>(arr: Type[]): Type
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
// function firstElement2<Type extends any[]>(arr: Type): any
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// let a: number (good)
let a = firstElement1([1, 2, 3]);
// let b: any (bad)
let b = firstElement2([1, 2, 3]);

export {};
