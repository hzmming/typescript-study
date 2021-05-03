function longest<T>(a: T, b: T): T {
  // ERROR!!!
  // Property 'length' does not exist on type 'T
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

export {};
