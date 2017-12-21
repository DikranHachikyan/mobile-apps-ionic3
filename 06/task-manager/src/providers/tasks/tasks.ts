import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Task } from '../../app/task';

const TASKS:Task[] =[
    {title:'Gratitude list – 5 things you are grateful for', status:'open'},
    {title:'Start the day with your WHY.', status:'open'},
    {title:'Fresh green juice', status:'open'},
    {title:'Write 500 words', status:'open'},
    {title:'Review the day and check in with the next few days', status:'open'},
    {title:'Clear desk ready for a fresh day tomorrow!', status:'open'}
];

const ARCHIVE:Task[] = [];

const REFRESH:Tasks[] = [
    {title:'Lorem ipsum dolor sit amet', status:'open'},
    {title:'Consectetur adipisicing elit', status:'open'},
    {title:'Voluptates dolorem, maxime labore', status:'open'},
    {title:'Fugiat corporis dicta dignissimos', status:'open'}
];

@Injectable()
export class TasksProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TasksProvider Provider');
  }

  getTasks():Observable<Task[]>{
    return Observable.of(TASKS);
  }

  addTask(task:Task):void{
    TASKS.push(task);
  }

  changeStatus(index:number, status:string):void{
    TASKS[index].status = status;
  }

  archiveTask(index:number):void{
    let archTask = TASKS.splice(index,1).pop();
    //console.log(archTask);
    ARCHIVE.push(archTask);
  }

  getNewTasks(){
    let task:Task = REFRESH.shift();
    if( typeof task !== 'undefined'){
        TASKS.push(task);
    }
  }

  changeTitle(index:number, title:string):void{
    TASKS[index].title = title;
  }

  //--------------------------------------------
  getArchivedTasks():Observable<Task[]>{
    return Observable.of(ARCHIVE);
  }

  restoreTask(index:number):void{
    let task:Task = ARCHIVE.splice(index,1).pop();
    if( task !== undefined){
        TASKS.push(task);
    }
  }
}
