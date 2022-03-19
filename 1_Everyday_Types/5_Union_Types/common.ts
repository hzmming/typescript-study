function getFirstThree(x: number[] | string) {
  // 不管是数组还是字符串，都有slice方法
  return x.slice(0, 3);
}