import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { User } from './user.model';


@Injectable()
export class AuthService {
    constructor(private http:Http){}

    signup(user:User){
        const body=JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://dumpit-node.herokuapp.com/user',body, {headers: headers})
            .map((response:Response)=>response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signin(user:User){
        const body=JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://dumpit-node.herokuapp.com/user/signin',body, {headers: headers})
            .map((response:Response)=>response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token')!==null;
    }
}
