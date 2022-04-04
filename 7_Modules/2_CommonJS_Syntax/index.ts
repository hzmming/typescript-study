//
// ESM 是后面才出的，早期社区都是用的CommonJS，有大量的npm包都用着CommonJS写法

// 1. 然而类型却是 any，这应该也是为什么那些第三方库会提供 xxx.d.ts 文件的原因吧
const maths = require("./vendor/maths"); // const maths: any

// 2. 解构
const { squareTwo } = require("./vendor/maths");
