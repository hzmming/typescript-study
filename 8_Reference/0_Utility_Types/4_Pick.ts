export {};

//
// Pick<Type, Keys>
// 从一个type中取出属性集 Keys 创造新的类型

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type TodoPreview = {
//   title: string;
//   completed: boolean;
// }
type TodoPreview = Pick<Todo, "title" | "completed">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
