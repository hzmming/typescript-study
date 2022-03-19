function multiply(n: number, ...m: number[]) {
  return m.map((i) => i * n);
}

const a = multiply(10, 1, 2, 3, 4);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

export {};
