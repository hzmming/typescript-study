export {};

//
// Omit<Type, Keys>
// 删除对象Type中指定的Keys，来构建新的type

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// type TodoPreview = {
//   title: string;
//   completed: boolean;
//   createdAt: number;
// }
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
