/**
 * Using Type Parameters in Generic Constraints
 */
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
const x = { a: 1, b: 2 };
getProperty(x, "a");
// ERROR!!!
// Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
getProperty(x, "c");

export {};