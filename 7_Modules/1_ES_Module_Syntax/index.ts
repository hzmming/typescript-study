//
// 关于 JavaScript 的 module 语法，这里就不再赘述
// 此处补充下 TypeScript 补充部分

// 1. import 类型（就和JS导入属性一样，直接混着用了。而且也支持默认导入）
import { Cat, Dog, fish } from "./vendor/animal";
import Person from "./vendor/animal";
type Animals = Cat | Dog;
console.log(fish);

// 2. 单独导 TS 的 type
import type { Fish } from "./vendor/animal";

// 3. 内联导入
import { desk, type Desk } from "./vendor/animal";
