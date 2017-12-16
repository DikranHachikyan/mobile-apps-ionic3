export class Point{
    

    constructor(private x:number,
                private y:number,
                private marker:string, 
                private visible:boolean){
    }
    
    public show():void{
        let text = 
 `Point:x=${this.x} 
 y=${this.y} 
 visible=${this.visible} 
 label=${this.marker}`;
        console.log(text);
    }
}