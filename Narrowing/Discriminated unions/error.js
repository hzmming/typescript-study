"use strict";
exports.__esModule = true;
function getArea(shape) {
    if (shape.kind === "circle") {
        // ERROR!!!
        // 因为ts不知道，radius如果在kind为circle时，就肯定有值。我们要告诉ts这一点
        // Object is possibly 'undefined'.
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
