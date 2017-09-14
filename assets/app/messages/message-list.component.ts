import { Component, OnInit } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'
    
})

export class MessageListComponent implements OnInit {
    messages:Message[];
    constructor(private messageService:MessageService) { }

    ngOnInit() {
        this.messages=this.messageService.getMessages();
     }

    // messages:Message[]= [
    //     new Message('First Message','Rahul Sahay'),
    //     new Message('Second Message','Rohit Sahay'),
    //     new Message('Third Message','Mohit Sahay'),
    // ];
}