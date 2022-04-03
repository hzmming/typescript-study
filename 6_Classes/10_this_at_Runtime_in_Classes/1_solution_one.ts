export {};

// 1. 使用箭头函数
/**
 * 1. 纯js解决方法，和ts没有关系
 * 2. 更占内存，并不会挂载到prototype上，而是每个实例对象独自挂载一个
 * 3. 子类无法使用 `super.getName` 调用父类方法，因为该方法不存在于原型链上，且会发现，子类自己身上也会直接挂载一份
 */
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
// 会打印出 `MyClass`
console.log(obj.getName());