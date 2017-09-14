import {  Component, OnInit } from '@angular/core';
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms/forms";


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
    
})

export class MessageInputComponent implements OnInit {
    constructor(private messageService: MessageService) {}

    ngOnInit() {}

    onSubmit(form:NgForm) {
        const message = new Message(form.value.content, 'John');
        this.messageService.addMessages(message);
        form.resetForm();
    }
   
}