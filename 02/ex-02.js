"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const service_1 = require("./service");
function auth(who) {
    who.login();
}
let u = new user_1.User('Anna', 'Smith');
let s = new service_1.Service('Json Data', 3000);
auth(u);
auth(s);
