"use strict";
exports.__esModule = true;
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
user.becomeAdmin();
