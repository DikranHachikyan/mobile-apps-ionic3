"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(name, port) {
        this.name = name;
        this.port = port;
    }
    show() {
        console.log(`Service:${this.name} on Port ${this.port}`);
    }
    login() {
        console.log(`Service: ${this.name} successful login`);
    }
    logout() {
        console.log(`Service: ${this.name} successful logout`);
    }
    register() { }
}
exports.Service = Service;
