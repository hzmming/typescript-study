function greet<Str extends string>(str: Str) {
  console.log("hello", str);
}

greet("Lee");

// 上面的泛型其实是多余的，可以简写成
function greet2(str: String) {
  console.log("hello", str);
}
greet2("Mai");

export {};
