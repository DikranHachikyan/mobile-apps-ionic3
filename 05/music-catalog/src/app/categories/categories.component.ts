import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

import { DataService } from '../data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];

  constructor(
        private dataService:DataService,
        private messageService:MessageService
    ){ }
    
  ngOnInit() {
    this.getCategories();
  }

  getCategories():void{
    this.dataService.getCategories()
                    .subscribe(
                        (categories) => this.categories = categories,
                        (err)=>console.log(err),
                        ()=>this.messageService.add('Categories Loaded!'));
  }
}
