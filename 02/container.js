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
        let ret = null;
        if (this.elements.length > 0) {
            ret = this.elements.shift();
        }
        return ret;
    }
    show() {
        for (const item of this.elements) {
            console.log(`${item}`);
        }
    }
}
exports.Container = Container;
