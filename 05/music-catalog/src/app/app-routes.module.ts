import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';

const routes:Routes = [
    { path: '', redirectTo: '/categories', pathMatch:'full'}
    { path: 'categories', component: CategoriesComponent },
    { path: 'items/:category', component: ItemsComponent},
    { path: 'items', component: BestSellersComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
            routes,
            {enableTracing: true}//Debug
            )],
  exports: [RouterModule]
})
export class AppRoutesModule { }
