function doSth(pair: readonly [string, number]) {
  // ERROR!!!
  // 不能修改
  pair[1] = 1;
}

// tuple适用的场景一般是不进行修改的，所以尽可能默认声明为readonly
// 使用 `as const`，则 point 被推断为 tuple type
let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
// ERROR!!!
// The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]
// 因为 [number, number] 没办法保证 point 不被修改，所以就不能用它来接收
distanceFromOrigin(point);

// 回顾下 as const
// let pointA: readonly [3, 4]
let pointA = [3, 4] as const;
// let pointB: { readonly x: 3; readonly y: 4 }
let pointB = { x: 3, y: 4} as const 

export {};
