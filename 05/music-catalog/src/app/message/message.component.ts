import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
 
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages:string[] = [];

  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.readMessages();
  }

  readMessages():void{
    this.messageService.getMessages()
                       .subscribe((messages)=>this.messages = messages,
                                  (err)=>console.log(err));
  }

  clearMessages(){
    this.messageService.clear();
    this.readMessages();
  }
}
