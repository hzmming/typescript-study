export {};

// 使用 mapped types，基于已有类型（主要是对象类型吧）生成新的类型
// 1. 使用 keyof 获取目标类型的所有key
// 2. 使用 in 遍历所有属性
// 3. 使用 Type[Property] 获取目标属性值类型
type Copy<Type> = {
  [Property in keyof Type]: Type[Property];
};
type Feature = {
  id: string;
  darkMode: () => void;
  newUserProfile: () => void;
};
// 看起来和 Feature 一模一样，但是我们可以基于些做更多变化
// type FeatureCopy = {
//   id: string;
//   darkMode: () => void;
//   newUserProfile: () => void;
// };
type FeatureCopy = Copy<Feature>;
