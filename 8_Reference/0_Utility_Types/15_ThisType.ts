export {};

//
// ThisType<Type>
// 为对象指定 this
// 官网demo写得贼复杂，先不管了~~

const obj = {
  name: "hello",
  greet() {
    console.log(this.name);
  },
};

interface Demo {
  demo: string;
}

const obj2: ThisType<Demo> = {
  name: "hello",
  greet() {
    console.log(this.demo);
    // ERROR!!!
    // Property 'name' does not exist on type 'Demo'.ts(2339)
    console.log(this.name);
  },
};
