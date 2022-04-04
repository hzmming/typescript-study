//
// 早期社区都是用的CommonJS，有大量的npm包都用着CommonJS写法
// 但现在官方写法是 ESM ，所以当使用 import 语法来导入 CommonJS包，会怎样呢？

// TS将CommonJS和ESM进行一定的匹配、对齐

// TODO ts用import语法导入CJS
// 想试试TS对齐效果，发现报错了。。。
import maths from "./vendor/maths"; // File '...' is not a module.ts(2306)

// 作罢，更多见 es官方配置 esModuleInterop（https://www.typescriptlang.org/tsconfig#esModuleInterop）
// 简单说下，
// 1. 将 import * as moment from "moment" 视为 const moment = require("moment")
// 2. 将 import moment from "moment" 视为 const moment = require("moment").default
// 很明显，比如第2点，CommonJS没有 default 这样一个概念，第2点用来加载CJS包会出问题，
// 怎么感觉第1点没问题呀，但TS还是整了个helper，之后再了解~~
// 所以TS整了个 esModuleInterop 属性，开启后会引入两个helper函数来作处理，分别对于1、2两点的：importStart 和 importDefault
// 这篇好文，之后再看下：https://www.notion.so/2022-4-1-f7607a17c97f435fb764a55532a50a28#8ed7daaef8fd48bdb9c970528f17c8bb
