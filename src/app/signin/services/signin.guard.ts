import { componentFactoryName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { CanDeactivate,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageUtils } from "src/app/utils/localstorage-utils";
import { RegisterComponent } from "../register/register.component";

@Injectable()
export class SignInGuard implements CanDeactivate<RegisterComponent>,CanActivate{
    
    localStorageUtils= new LocalStorageUtils();
    
    constructor(private router:Router){

    }
    
    canActivate(){
        if(this.localStorageUtils.getUserToken()){
            this.router.navigate(['/home']);
        }
        return true;

    }
    canDeactivate(component:RegisterComponent){
        
        if(component.unsavedChanges){
            return window.confirm('Are you sure that you want to abandon filling out the form?')
        }

        return true;
    }


}