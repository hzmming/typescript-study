function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  // let x: boolean
  console.log(x);

  if (Math.random() < 0.5) {
    // let x: string
    x = "hello";
  } else {
    // let x: number
    x = 100;
  }

  // 经过了前面的 if else，只剩下这两种type
  // let x: string | number
  return x;
}

export {};
