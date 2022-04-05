export {};

//
// ThisParameterType<Type>
// 获取函数类型的 this parameter type，如果没有this parameter则返回 unknown

function toHex(this: number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
