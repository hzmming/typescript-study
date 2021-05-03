type SomeObject = any;

/**
 * 等价于 
 * interface SomeConstructor {
 *  new (s: string): SomeObject;
 * }
 * 不再赘述
 */ 
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

export {};
