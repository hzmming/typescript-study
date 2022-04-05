export {};

//
// Required<Type> 使用Type的所有属性，生成新的type，且所有属性设置为必选required

interface Props {
  a?: number;
  b?: number;
}

const obj: Props = { a: 5 };

// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.ts(2741)
const obj2: Required<Props> = { a: 5 };
