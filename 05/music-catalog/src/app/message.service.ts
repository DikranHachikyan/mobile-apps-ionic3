import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MessageService {
    messages:string[] = [];

  constructor() { }

  add(message:string):void{
    this.messages.push(message);
  }

  getMessages():Observable<string[]>{
    return Observable.of(this.messages);
  }

  clear():void{
    this.messages = [];
  }
}
