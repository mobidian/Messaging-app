import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Message } from "./message.model";

@Injectable()
export class MessageService {
    private messages:Message[]=[];
    constructor(private http: Http) { }
    
    addMessages(message:Message){
        this.messages.push(message);
        const body= JSON.stringify(message);
        const headers= new Headers({'Content-Type':'application/json'});
        //This just sets up the observable, doesn't send the request.
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
      //  console.log(this.messages);
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