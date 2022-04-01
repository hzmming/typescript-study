export {};

// class也可以使用 index signatures，和在interface中声明一样
// class的index signatures限制 属性和方法
// 好像不怎么实用的样子~~
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  hello = true;
  world = "world"; // Property 'world' of type 'string' is not assignable to 'string' index type 'boolean | ((s: string) => boolean)'.ts(2411)

  check(s: string) {
    return this[s] as boolean;
  }
}
