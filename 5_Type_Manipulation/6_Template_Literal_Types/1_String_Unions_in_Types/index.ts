export {};

/**
 * 假设这样一个场景，实现函数`makeWatchedObject(obj)`，传递对象obj，用于监听对象obj属性变化
 * makeWatchedObject为对象obj添加 on(eventName, callback) 方法，
 * 事件名eventName则是根据对象属性，自动生成`${属性名}Changed`
 */
type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
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
person.on("firstNameChanged", () => {});
// 这样就可以检测出低级错误
// Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.ts(2345)
person.on("firstName", () => {});
