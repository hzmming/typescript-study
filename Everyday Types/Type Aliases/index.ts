type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(pt.x);
  console.log(pt.y);
}

printCoord({ x: 100, y: 100 });

export {}