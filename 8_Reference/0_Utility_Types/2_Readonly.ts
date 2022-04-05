export {};

//
// Readonly<Type> 使用Type的所有属性，生成新的type，且所有属性设置为只读readonly

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "delete inactive users",
};

// Cannot assign to 'title' because it is a read-only property.ts(2540)
todo.title = "hello";
