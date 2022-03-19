interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
			// shape此时为never类型，所以可以赋值给_exhaustiveCheck
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

export {};
