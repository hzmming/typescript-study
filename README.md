对 TypeScript 官方手册的一个学习记录

https://www.typescriptlang.org/docs/handbook/intro.html

使用严格模式编译代码

```shell
# 普通
tsc --strict 0_The_Basics/0_Explicit_Types/hello.ts

# 装饰器
tsc --strict --experimentalDecorators 8_Reference/1_Decorators/0_Basic.ts
```

tsc 执行时，如果指定了要处理的源文件 source files，好像就不会去读 tsconfig.json 了~~

而且也不能即指定源文件，又指定 tsconfig.json。。。
