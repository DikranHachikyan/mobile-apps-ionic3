import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

import { DataService }  from './data.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { ItemsComponent } from './items/items.component';

import { AppRoutesModule } from './app-routes.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MessageComponent,
    ItemsComponent,
    PageNotFoundComponent,
    BestSellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
  //bootstrap: [ItemsComponent]
})
export class AppModule { }
