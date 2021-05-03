type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };
declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const zoo: (Bird | Fish)[] = [getSmallPet(), getSmallPet(), getSmallPet()];

// const underWater1: Fish[]
const underWater1 = zoo.filter(isFish);

// const underWater2: Fish[]
const underWater2 = zoo.filter((pet): pet is Fish => {
  // 过滤某一种鱼类
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

export {};
