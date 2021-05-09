function f1(): void {
  // ERROR!!!
  // Type 'boolean' is not assignable to type 'void'
  // return true;
}

// 这样就不会报错
type voidFunc = () => void;
const f2: voidFunc = () => {
  return true;
};
const f3: voidFunc = function () {
  return true;
};
const f4: voidFunc = () => "hello";
// 即使return值了，ts会自动忽略
// const v2: void
const v2 = f2();
// const v3: void
const v3 = f3();
// const v4: void
const v4 = f4();

// 这样设定的目的是，以下这种情况可以成立
const src = [1, 2, 3];
const dist = [0];
// 虽然forEach要的是return void的callback function，
// 而目前我们的callback的类型为 (i:number) => number，依然成立！
src.forEach((i) => dist.push(i));

export {};
