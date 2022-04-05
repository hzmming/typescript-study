export {};

//
// Record<Keys, Type>
// 创建 object type，其 属性key 为 Keys，属性值为 Type
// 若Keys或Type为union type，自动组合匹配

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// (property) boris: CatInfo
cats.boris;
