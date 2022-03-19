/**
 * Generic Constraints
 */
interface Lengthwise {
  length: number;
}
function loggingIdentify2<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
// ERROR!!!
// 没有length
loggingIdentify2(3);
// Success
loggingIdentify2({ length: 2, value: 3 });

export {};