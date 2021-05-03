type Fish = { swim: () => void };
type Bird = { fly: () => void };
declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  // 将pet声明为Fish，才具备swim方法
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();
if (isFish(pet)) {
  // 通过isFish，确定类型为 Fish
  // let pet: Fish
  pet.swim();
} else {
  // 过滤掉类型Fish，剩下Bird类型
  // let pet: Bird
  pet.fly();
}

export {};
