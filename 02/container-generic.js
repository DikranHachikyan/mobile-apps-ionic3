"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Container {
    constructor() {
        this.elements = [];
    }
    put(item) {
        this.elements.push(item);
    }
    get() {
        return this.elements.shift();
    }
    show() {
        for (const item of this.elements) {
            console.log(`${item}`);
        }
    }
}
exports.Container = Container;
