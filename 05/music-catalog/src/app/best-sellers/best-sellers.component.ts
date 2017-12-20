import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { DataService }  from '../data.service';
import { MessageService } from '../message.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  bestSellers:Item[] = [];

  constructor(private dataService:DataService,
              private messageService:MessageService,
              private location:Location) { }

  ngOnInit() {
    this.getBestSellers();
  }

  getBestSellers(){
    this.dataService.getBestSellers()
                    .subscribe((res)=>{
                                Object.keys(res).map((key)=>{
                                    this.bestSellers.push( res[key][0] );
                                    });
                               },
                               (err)=>console.log(err),
                               ()=>this.messageService.add('Best sellers loaded!'));
  }

  goBack(){
    this.location.back();
  }
}
