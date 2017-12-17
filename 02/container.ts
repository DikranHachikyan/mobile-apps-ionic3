export class Container{
    private elements:any[];

    constructor(){
        this.elements = [];
    }

    put(item:any){
        this.elements.push(item);
    }

    get(){
        let ret:any = null;
        if(this.elements.length > 0){
            ret = this.elements.shift();
        }
        return ret
    }

    show(){
        for( const item of this.elements){
            console.log(`${item}`);
        }
    }
}