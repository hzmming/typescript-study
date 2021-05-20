interface Shape {}
declare function getShape(): Shape;

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // let a: number | undefined
  let a = opts.xPos;
  // ERROR!!!
  // a.toFixed();

  // let b: number;
  let b = opts.xPos !== undefined ? opts.xPos : 0;
  b.toFixed();
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

// 可以使用解构加默认值来避免 undefined
function paintShape2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  // let a: number
  let a = xPos;
}

export {};
