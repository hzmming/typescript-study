function print(align: "Left" | "Right") {
  switch (align) {
    case "Left":
      // (parameter) align: "Left"
      console.log(align);
      break;
    case "Right":
      // (parameter) align: "Right"
      console.log(align);
      break;
    default:
      // (parameter) align: never
      console.log(align);
  }
}

export {};
