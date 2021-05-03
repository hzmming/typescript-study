function paddingLeft(padding: string | number, input: string): string {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

function printAll(strs: string[] | null) {
  if (typeof strs === "object") {
    // ERROR!!!
    // Object is possibly 'null'
    for (const s of strs) {
      console.log(s);
    }
  } else {
    // ...
  }
}

export {};
