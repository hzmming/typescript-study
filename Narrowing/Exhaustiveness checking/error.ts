interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  sideLength: number;
}

interface Triangle {
  type: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // ERROR!!!
			// 因为shape此时为Triangle类型，所以不可以赋值给_exhaustiveCheck
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

export {};