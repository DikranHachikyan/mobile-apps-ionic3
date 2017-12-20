import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { DataService }  from '../data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  const CATEGORY = 'rock';  
  items:Item[]=[];

  constructor(
    private dataService:DataService,
    private messageService:MessageService) { }

  ngOnInit() {
    this.getItems(this.CATEGORY);
  }

  getItems(category:string):void{
    this.dataService.getItems(category)
                    .subscribe(
                        (items)=>{
                            Object.keys(items).map((key)=>{
                                this.items.push(items[key]);
                            });    
                        }
                        ,
                        (err)=>console.log(err),
                        ()=>this.messageService.add('Items Loaded'));
  }
}
