function minimumLength<Type extends { length: number }>(
  obj: Type,
  minium: number
): Type {
  if (obj.length > minium) {
    return obj;
  } else {
    // ERROR!!!
    // 看似 { length: minium } 也符合 Type 类型，因为 Type 受 { length: number } 约束，但不能就说 { length: number } 等同于 Type
    // Type '{ length: number; }' is not assignable to type 'Type
    return { length: minium };
  }
}

// 实际例子
let test = [1, 2, 3];
const arr = minimumLength(test, 6);
// arr实际值为 { length: 6 }，虽然符合约束，却不具备 slice 方法
console.log(arr.slice(0));

export {};
