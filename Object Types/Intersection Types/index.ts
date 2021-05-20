interface Colorful {
  color: string;
}
interface Circle {
  color: number;
  radius: number;
}

type ColorfulCircleType = Colorful & Circle;

const cct: ColorfulCircleType = {
  // ERROR!!!
  // type & type，出现同名但类型不一样的字段时，取never
  color: "red",
  radius: 5,
};

// ERROR!!!
// 页 interface extends时，出现同名但类型不一样的字段，报错
interface ColorfulCircleInterface extends Colorful, Circle {}

export {};
