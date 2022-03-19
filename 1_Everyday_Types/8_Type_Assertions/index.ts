const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Error !!!
// const x = "hello" as number;
// 非要强转
const x = ("hello" as any) as number;

// any 是包含 string 的
const y = "hello" as any;

export {};
