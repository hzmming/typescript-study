interface User {
  id: number;
  admin: boolean;
}

// ----- declare未实现前置项，便于演示 ------
interface DB {
  filterUsers: (filter: (this: User) => boolean) => User[];
}
declare const getDB: () => DB;
// -----------

const db = getDB();
const admins = db.filterUsers(function () {
  return this.admin;
});

export {};
