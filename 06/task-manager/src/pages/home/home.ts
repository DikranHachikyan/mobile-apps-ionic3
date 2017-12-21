import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task } from '../../app/task';

import { TasksProvider } from '../../providers/tasks/tasks';

import { AlertController, 
         ItemSliding, 
         reorderArray, 
         ToastController } from 'ionic-angular';

import {ArchivePage} from '../archive/archive';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tasks:Task[] = [];
  reorderIsEnabled:boolean = false;

  constructor(public navCtrl: NavController,
              private tasksProvider:TasksProvider,
              private alertCtrl:AlertController,
              private toastCtrl: ToastController) {

  }

  gotoArchivePage():void{
    this.navCtrl.push(ArchivePage);
  }

  editTask(index:number, itemSliding:ItemSliding):void{
    let task:Task = this.tasks[index];
    let oldTitle = task.title;
    let modTask = this.alertCtrl.create({
        title:'Edit Task',
        message:'Modify task:',
        inputs:[{
            type:'text',
            name:'newTitle',
            value: task.title
        }],
        buttons:[{
            text:'Cancel'
        },
        {
            text:'Modify',
            handler: (data)=>{
                let title = data.newTitle;
                if(typeof title === 'string' && title.trim().length > 0){
                    this.tasksProvider.changeTitle(index, title);

                    modTask.onDidDismiss(()=>{
                        let toast = this.toastCtrl.create({
                            message: oldTitle + ' has been edited',
                            duration: 3000
                        });

                        toast.present();
                    });// on did dismiss
                }
            }
        }]
    });

    modTask.present();

    itemSliding.close();
  }
  
  refreshTasks($event):void{
    this.tasksProvider.getNewTasks();
    $event.complete();
  }

  itemReorder($event):void{
    reorderArray(this.tasks, $event);
    //console.log($event);
  }

  ionViewDidLoad(){
    this.tasksProvider.getTasks()
                      .subscribe( (data)=>this.tasks = data );
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  markAsDone(index:number, itemSlisding:ItemSliding):void{
    this.tasksProvider.changeStatus(index,'done');
    itemSlisding.close();
  }

  archiveTask(index:number):void{
    this.tasksProvider.archiveTask(index);
  }

  addTask():void{
    let newTask = this.alertCtrl.create({
        title:'Add New Task',
        message:'Enter your task:',
        inputs:[{
            type:'text',
            name:'taskTitle',
            placeholder:'Task Title'
        }],
        buttons:[{
            text:'Cancel'
        },
        {
            text:'Add',
            handler: (data)=>{
                        let task:Task = {
                            title: data.taskTitle,
                            status: 'open'
                        };
                        this.tasksProvider.addTask(task);

                        newTask.onDidDismiss(()=>{
                            let toast = this.toastCtrl.create({
                                message: task.title + ' added',
                                duration: 3000
                            });
                            toast.present();
                        });//on did dismiss
                    }
        }]
    });//create

    newTask.present();
  }
}
