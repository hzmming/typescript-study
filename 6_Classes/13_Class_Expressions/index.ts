export {}

//
// 除了可以不用给名字以外，和普通class定义一模一样（当然你想给名字也行的）
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
// const m: someClass<string>
const m = new someClass("hello world");

//
// 给名字试试
const namedClass = class Name<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
// const n: Name<string>
const n = new namedClass("hello wrold");
