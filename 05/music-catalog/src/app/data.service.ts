import { Injectable } from '@angular/core';
import { CATEGORIES } from './categories-data';
import { Category } from './category';

import {Item} from './item';
import {ITEMS} from './items-data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
;
//import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor() { }

  getCategories():Observable<Category[]>{
    console.log('Categories');
    return Observable.of(CATEGORIES);
    //return of(CATEGORIES);
  }

  getItems(category:string):Observable<Item[]>{
    return Observable.of(ITEMS[category]);
  }

  getBestSellers():Observable<Item[]>{
 
    return Observable.of(ITEMS);
  }
}
