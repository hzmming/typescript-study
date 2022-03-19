interface Animal {
  alive: boolean;
}

interface Bird extends Animal {
  fly(): void;
}

// 还可以多继承
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 5,
};

export {};
