export {};

// 结合 conditional type
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

// type ObjectsNeedingGDPRDeletion = {
//   id: false;
//   name: true;
// }
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
