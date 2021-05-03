function liveDangerously(x?: number | undefined) {
  console.log(x!.toFixed());

  // 注意区分
  console.log(x?.toFixed());
}

export {};