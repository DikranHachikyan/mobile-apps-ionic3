import { AuthInterface } from './authinterface';
import { User } from './user';
import { Service } from './service';


function auth( who:AuthInterface){
    who.login();
}


let u = new User('Anna', 'Smith');
let s = new Service('Json Data', 3000);

auth(u);

auth(s);

