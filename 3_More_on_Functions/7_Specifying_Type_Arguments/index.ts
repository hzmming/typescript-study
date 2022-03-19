function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// ERROR!!!
// Type 'string' is not assignable to type 'number
// const arr = combine([1, 2, 3], ["hello", "world"]);

// Success
// const arr: (string | number)[]
const arr = combine<number | string>([1, 2, 3], ["hello", "world"]);

export {};
