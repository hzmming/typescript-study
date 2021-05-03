function printName(obj: { first: string; last?: string }) {
  if (obj.last) {
    obj.last.toUpperCase();
  }
  obj.last?.toUpperCase();
}

export {}