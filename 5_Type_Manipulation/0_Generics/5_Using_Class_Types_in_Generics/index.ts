/**
 * Using Class Types in Generics
 */
// 工厂函数
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
/**
 * ERROR!!!
 * 一样会报 strict-class-initialization 错误。解决方法见前面
 */
// 引入 class type
class BeeKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nametag: string = "Mikle";
}
class Animal {
  numLegs: number = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

export {};