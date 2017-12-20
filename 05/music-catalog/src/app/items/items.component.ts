import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { DataService }  from '../data.service';
import { MessageService } from '../message.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:Item[]=[];

  constructor(
    private dataService:DataService,
    private messageService:MessageService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.getItems();
  }

  getItems():void{
    const category = this.route.snapshot.paramMap.get('category');
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
