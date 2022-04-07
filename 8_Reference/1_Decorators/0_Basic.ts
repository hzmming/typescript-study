export {};

//
// Decorators（装饰器）
// 语法: @expression
// 和 class 结合使用，有5个地方可以使用
// 1. class declaration 类装饰器
// 2. method 方法装饰器
// 3. accessor 属性访问器装饰器
// 4. property 属性装饰器
// 5. parameter 方法参数装饰器

function log(target: any) {
  console.log(target);
}

@log
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
