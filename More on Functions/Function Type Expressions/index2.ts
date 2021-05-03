type GreetFunction = (msg: string) => void;

function greeter(fn: GreetFunction) {
  fn("hello");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

export {};
