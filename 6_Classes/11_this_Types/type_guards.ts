export {};

//
// 1. 使用 `this is Type` 作为方法返回值，来对 this 进行 narrow
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
}

class FileRep extends FileSystemObject {
  // TBD
}

class Directory extends FileSystemObject {
  // TBD
}

//
// 2. 一种常见的使用场景：延迟校验。demo大概能看懂吧，但官方这段话没看明白~~
class Box<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
const box = new Box();
box.value = "Gameboy";

// (property) Box<unknown>.value?: unknown
box.value;

if (box.hasValue()) {
  // (property) value: unknown
  box.value;
}
