import { User } from './user';

let user = new User('Anna','Smith');

user.show();

//user.setFirstName('John');

user.firstName = 'Maria';

console.log(`First name:${user.firstName}`);

user.register();

user.login();

user.logout();