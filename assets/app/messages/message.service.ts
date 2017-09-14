import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Message } from "./message.model";

@Injectable()
export class MessageService {
    private messages:Message[]=[];
  //  constructor(private http: Http) { }
    
    addMessages(message:Message){
        this.messages.push(message);
        console.log(this.messages);
    }
    getMessages(){
        return this.messages;
    }

    // editMessage(){

    // }

    //Look for the index of message and then delete the same
    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}