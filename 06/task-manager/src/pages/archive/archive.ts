import { Component } from '@angular/core';
import { IonicPage, 
         NavController, 
         NavParams,
         ItemSliding,
         ToastController } from 'ionic-angular';

import { TasksProvider } from '../../providers/tasks/tasks';
import { Task } from '../../app/task';
/**
 * Generated class for the ArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {
  
  archivedTasks:Task[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tasksProvider:TasksProvider,
              private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    this.tasksProvider.getArchivedTasks()
                      .subscribe( (data)=>{
                        this.archivedTasks = data;
                      });
  }

  restoreTask(index:number, slidingItem:ItemSliding):void{
    let title:string = this.archivedTasks[index].title;

    this.tasksProvider.restoreTask(index);
    slidingItem.close();
    let toast  = this.toastCtrl.create({
        message: title + ' has been restored',
        duration:3000
    });//create toast

    toast.present();
  }

}
