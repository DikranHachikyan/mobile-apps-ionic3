"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
let user = new user_1.User('Anna', 'Smith');
user.show();
//user.setFirstName('John');
user.firstName = 'Maria';
console.log(`First name:${user.firstName}`);
user.register();
user.login();
user.logout();
