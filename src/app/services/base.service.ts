import { environment } from "src/environments/environment";
import { LocalStorageUtils } from "../utils/localstorage-utils";
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class BaseService{

    public LocalStorage=new LocalStorageUtils;
    protected UrlServiceV1:string=environment.apiUrlV1;


    protected GetJsonHeader(){
        return{
            
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
    }

    protected extractData(response:any){
        return response.data || {};
    }

    protected serviceError(response:any){
        let customErrors:string[]=[];

        if(response.statusText==="Unknown Error")
        {
            customErrors.push("Ocorreu um erro desconhecido");
            response.error.errors = customErrors;
        }

        console.error(response);
        return throwError(response);
    }
}