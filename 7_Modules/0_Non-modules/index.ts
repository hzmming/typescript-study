// 使用了 import 或 export 的话，ts会将当前文件认为一个 module。
// 如果没使用的话，又想让当前文件成为module（成为module的话，变量隔离），可以这样
export {};
