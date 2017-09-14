import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`
    .author{
        display:inline-block;
        font-style:italic;
        font-size:12px;
        width:80%;
    }
    .config{
        display:inline-block;
        text-align:right;
        font-size:12px;
        width:19%;
    }
`]
})

export class MessageComponent implements OnInit {
    //Means, message can be assigned from outside
   @Input('inputMessage') message:Message
   @Output() editClicked = new EventEmitter<string>();
    constructor() { }

    ngOnInit() { }

    onEdit(){
       this.editClicked.emit('A new value from message component to app component!');
    }
}