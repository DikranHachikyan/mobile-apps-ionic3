import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

import { DataService }  from './data.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MessageComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, MessageService],
  //bootstrap: [AppComponent]
  bootstrap: [ItemsComponent]
})
export class AppModule { }
