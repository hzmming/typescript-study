export {};

class B {
  _name = "hello";
  get name() {
    return this._name;
  }
}

const b = new B();
// 1. 若给了get却没有给set，则属性自动为readonly
b.name = "world"; // Cannot assign to 'name' because it is a read-only property.ts(2540)

class C {
  _name = "hello";
  get name() {
    return this._name;
  }
  // 2. 若没有为setter parameter指定type，则默认取getter返回值type
  // (parameter) str: string
  set name(str) {
    this._name = str;
  }
}

class D {
  _size = 0;
  get size(): number {
    return this._size;
  }
  // 从 TypeScript4.3 开始，setter parameter的type类型 可以和 getter的返回值type不一样（不过setter最终赋值时，肯定会自行保持一致，否则报错）
  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}
