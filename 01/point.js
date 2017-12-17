export class Point {
    constructor(x, y, marker, visible) {
        this.x = x;
        this.y = y;
        this.marker = marker;
        this.visible = visible;
    }
    show() {
        let text = `Point:x=${this.x} 
 y=${this.y} 
 visible=${this.visible} 
 label=${this.marker}`;
        console.log(text);
    }
}
