import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'First Component';
  visible = true;
  items = ['София','Варна','Пловдив','Бургас'];
  constructor() { }

  ngOnInit() {
  }

  onClick():void{
    this.name = this.name.toUpperCase();
    this.visible = !this.visible;
  }

}
