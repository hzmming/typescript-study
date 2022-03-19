"use strict";
exports.__esModule = true;
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        // TypeScript 可以自动推断出此处的 this 为 user 对象
        this.admin = true;
    }
};
user.becomeAdmin();
