"use strict";
function minimumLength(obj, minium) {
    if (obj.length > minium) {
        return obj;
    }
    else {
        return { length: minium };
    }
}
