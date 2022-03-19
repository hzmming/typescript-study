function sum({ a, b, c }: { a: number; b: number; c: number }) {
  return a + b + c;
}
sum({ a: 10, b: 3, c: 9 });

type ABC = { a: number; b: number; c: number };
function sum2({ a, b, c }: ABC) {
  return a + b + c;
}
sum2({ a: 10, b: 3, c: 9 });

export {};
