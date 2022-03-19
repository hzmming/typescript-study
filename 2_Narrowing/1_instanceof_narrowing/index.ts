function logVal(x: Date | string) {
  if (x instanceof Date) {
    // (parameter) x: Date
    console.log(x.toUTCString());
  } else {
    // (parameter) x: string
    console.log(x.toUpperCase());
  }
}

export {};
