import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient} from '@angular/common/http';


import { User } from "src/app/models/user";
import { BaseService } from "src/app/services/base.service";

@Injectable()
export class SignInService extends BaseService{

    constructor(private http:HttpClient){
        super();
    }

    registerUser(user:User):Observable<User>{
        let response=this.http
                         .post(this.UrlServiceV1+ 'register',user,this.GetJsonHeader())
                         .pipe(
                             map(this.extractData),
                             catchError(this.serviceError)
                         );
                         return response;
    }

    login(user:User){
        let response=this.http
                         .post(this.UrlServiceV1 +'login',user,this.GetJsonHeader())
                         .pipe(
                             map(this.extractData),
                             catchError(this.serviceError));
                             return response;
    }
}