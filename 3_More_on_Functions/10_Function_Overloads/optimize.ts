function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

makeDate(1234567890);
makeDate(6, 6, 6);
// ERROR!!!
// 符合预期的错误，因为makeDate就不支持2个参数
// makeDate(6, 6);

export {};
