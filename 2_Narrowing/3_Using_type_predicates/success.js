"use strict";
exports.__esModule = true;
function isFish(pet) {
    // 将pet声明为Fish，才具备swim方法
    return pet.swim !== undefined;
}
var pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
