"use strict";
exports.__esModule = true;
function isFish(pet) {
    return pet.swim !== undefined;
}
var zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[]
var underWater1 = zoo.filter(isFish);
// const underWater2: Fish[]
var underWater2 = zoo.filter(function (pet) {
    // 过滤某一种鱼类
    if (pet.name === "sharkey")
        return false;
    return isFish(pet);
});
