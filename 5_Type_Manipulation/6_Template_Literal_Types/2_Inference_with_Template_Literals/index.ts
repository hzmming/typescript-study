export {};

// 基于上一节再进一步优化
// 上一节的 callback 写的是 callback: (newValue: any) => void
// 参数是直接写的 any，我们希望这个参数是动态根据对象属性决定的，如果属性是string，这个参数就是string，如果是number，这个就是number

// 利用 `Key extends string & keyof Type` 可以获取具体属性名Key，再使用 `Type[Key]` 可以获取属性Key的值类型
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};
declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person.on("firstNameChanged", (newName) => {
  // (parameter) newName: string
  console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("ageChanged", (newAge) => {
  // (parameter) newAge: number
  if (newAge < 0) {
    console.warn("warning! negative age");
  }
});
