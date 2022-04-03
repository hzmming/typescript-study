export {};

//
// 1. ts会简单地比较数据结构，即使不是同一class，但是结构相同，会近似认为相同

class Point1 {
  x = 0;
  y = 0;
}

class Point2 {
  x = 0;
  y = 0;
}
// 使用Point1类型可以接受Point2类型，虽然是两个class，但却可以互相使用
const point: Point1 = new Point2();

//
// 2. 同理，没有明确的继承，但二者数据结构“看似继承”，也可以近似认为相同
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

const person: Person = new Employee("hello", 18, 2000);

//
// 3. 更夸张的，如果你写了个empty class，可以用它来接收任何类型
// 仅作示意，不要这样用！！！
class Empty {}
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}

// All OK!
fn(window);
fn({});
fn(fn);
