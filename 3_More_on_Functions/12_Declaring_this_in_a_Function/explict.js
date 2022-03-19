"use strict";
exports.__esModule = true;
// -----------
var db = getDB();
var admins = db.filterUsers(function () {
    return this.admin;
});
