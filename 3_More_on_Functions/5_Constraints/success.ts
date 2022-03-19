function longest<T extends { length: number }>(a: T, b: T): T {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

export {};
