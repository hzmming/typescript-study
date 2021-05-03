function greeter(fn: (msg: string) => void) {
  fn("hello");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

export {};
