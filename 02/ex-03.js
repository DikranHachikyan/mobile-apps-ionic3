"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./container");
let container = new container_1.Container();
container.put('Anna');
container.put('John');
container.put('Maria');
container.put('Peter');
container.put(1000);
container.show();
container.get();
container.get();
console.log('====================================');
container.show();