"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(_firstName, lastName) {
        this._firstName = _firstName;
        this.lastName = lastName;
    }
    show() {
        console.log(`User:${this.firstName} ${this.lastName}`);
    }
    set firstName(name) {
        console.log('first name setter');
        this.firstName = name;
    }
    get firstName() {
        return this.firstName;
    }
    login() {
        console.log(`User: ${this.firstName} successful login`);
    }
    logout() {
        console.log(`User: ${this.firstName} successful logout`);
    }
    register() {
        console.log(`User: ${this.firstName} registered`);
    }
}
exports.User = User;
