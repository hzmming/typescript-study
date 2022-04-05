export {};

// OmitThisParameter<Type>
// 和 ThisParameterType<Type> 相反，去除Type中的this parameter，若Type无this parameter，则直接返回Type

function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
