export class Container<T>{
    private elements:T[];

    constructor(){
        this.elements = [];
    }

    put(item:T){
        this.elements.push(item);
    }

    get():any{
        return this.elements.shift();
    }

    show(){
        for( const item of this.elements){
            console.log(`${item}`);
        }
    }
}