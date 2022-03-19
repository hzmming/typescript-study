function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a, i) => {
  // ERROR!!!
  // 因为 i 被声明为可选参数
  // error TS2532: Object is possibly 'undefined'.
  console.log(i.toString());
});

export {};
