import {Container} from './container';


let container = new Container();

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



 