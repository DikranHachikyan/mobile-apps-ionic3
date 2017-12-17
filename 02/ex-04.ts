import {Container} from './container-generic';


let container = new Container<string>();

container.put('Anna');
container.put('John');
container.put('Maria');
container.put('Peter');
//container.put(1000);

container.show();
container.get();
container.get();
console.log('====================================');
container.show();
container.get();
container.get();
container.show();
console.log( typeof container.get());



 