export {};

// 2. 使用 this 参数进行校验
// 因为 this 对于 js 是个关键字，函数参数不能用 this 作为名称，因此ts拿来用作this指向校验
// 注意，this参数必须作为第一个函数参数，且tsc编译完后，就会把该this参数擦除
class MyClass {
  name = "MyClass";
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
c.getName();

const g = c.getName;
// ERROR!!!
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.ts(2684)
g();
