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
    
    addMessage(message:Message){
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
        return this.http.get('http://localhost:3000/message')
                        .map((response:Response)=>{
                            //Message from server side sent in obj field
                            const messages=response.json().obj;
                            let transformedMessages:Message[]=[];
                            //Here fetching the transformed messages basically
                            for(let message of messages){
                                transformedMessages.push(new Message(message.content,'Dummy',message.id,null));
                            }
                            this.messages=transformedMessages;
                            return transformedMessages;
                        }).catch((error: Response) => Observable.throw(error.json()));
    }

    editMessage(message:Message){
        
    }

    //Look for the index of message and then delete the same
    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}