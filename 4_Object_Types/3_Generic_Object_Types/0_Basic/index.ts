// a Box of Type
interface Box<Type> {
  contents: Type;
}

let box1: Box<string> = { contents: "Hello" };
let box2: Box<number> = { contents: 233 };

interface Apple {}
type AppleBox = Box<Apple>;

// 结合generic function
function setContents<Type>(box: Box<Type>, contents: Type) {
  box.contents = contents;
}

export {};
