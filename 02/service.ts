import { AuthInterface as Auth} from './authinterface';

export class Service implements Auth {


    constructor(private name:string, private port:number){

    }

    show(){
        console.log(`Service:${this.name} on Port ${this.port}`);
    }

    login(){
        console.log(`Service: ${this.name} successful login`);
    }
    
    logout(){
        console.log(`Service: ${this.name} successful logout`);
    }

    register(){}
}