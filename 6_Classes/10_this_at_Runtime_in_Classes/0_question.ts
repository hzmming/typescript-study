export {};

// 问题：js的this指向，根据调用对象的不同指向不同，往往不是开发者所预期的（不懂~~），要如何规避这种行为呢？？？
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
// 会打印出 `obj` 而不是 `MyClass`
console.log(obj.getName());
