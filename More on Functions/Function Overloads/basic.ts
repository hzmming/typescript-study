// 看似是可以，但是没有体现调用关系！！
// 从代码上可以看出，实际上只支持两种模式
// 1. 只传一个参数（时间戳）
// 2. 传3个参数（月、日、年）
// 也就是说，参数d 和 参数y 要嘛一起传，要嘛都不传！
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

makeDate(1234567890);
makeDate(6, 6, 6);
// 不会报错！！！
// 因为我们没有将 参数d 和 参数y 之间的关系告诉 TypeScript
makeDate(6, 6);

export {};
