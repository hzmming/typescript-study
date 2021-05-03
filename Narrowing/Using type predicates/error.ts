type Fish = { swim: () => void };
type Bird = { fly: () => void };
declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird) {
  // 将pet声明为Fish，才具备swim方法
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();
if (isFish(pet)) {
  // ERROR!!!
  pet.swim();
} else {
  // ERROR!!!
  pet.fly();
}

export {}