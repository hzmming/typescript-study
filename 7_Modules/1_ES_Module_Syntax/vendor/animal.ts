export type Cat = { breed: string; yearOfBirth: number };
// 如果type和js变量同名了，外部 import { Cat } from './..' 会怎样呢？？？
// 答：两者同时导入！！！
export const Cat = { mmm: true };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

export type Fish = { swimming: boolean };

export const fish = { swimming: true };

type Person = {
  age: number;
};

export const desk = { width: 1.6 };
export type Desk = { width: number };

export default Person;
