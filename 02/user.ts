import { AuthInterface } from './authinterface';

export class User implements AuthInterface {


    constructor(private _firstName:string, private lastName:string){

    }

    show(){
        console.log(`User:${this.firstName} ${this.lastName}`);
    }

    set firstName(name:string){
        console.log('first name setter');
        this.firstName = name;
    }

    get firstName():string{
        return this.firstName;
    }

    login():void{
        console.log(`User: ${this.firstName} successful login`);
    }
    
    logout():void{
        console.log(`User: ${this.firstName} successful logout`);
    }

    register():void{
        console.log(`User: ${this.firstName} registered`);
    }
}