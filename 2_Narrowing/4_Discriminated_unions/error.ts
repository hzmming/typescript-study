// 定义一种Shape类型，只能是circle或者square
// 因为radius只有circle有，所以radius为可选。同理，sideLength也为可选。
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    // ERROR!!!
    // 因为ts不知道，radius如果在kind为circle时，就肯定有值。我们要告诉ts这一点
    // Object is possibly 'undefined'.
    return Math.PI * shape.radius ** 2;
  }
}

export {};
