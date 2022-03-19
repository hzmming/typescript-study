function printId(id: number | string) {
  // 不先判断是字符串直接调用toUpperCase会报错
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

export {};
