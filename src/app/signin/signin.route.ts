import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SignInGuard } from "./services/signin.guard";
import { SignInComponent } from "./signin.component";


const signinRouterConfig:Routes=
[
    {
        path:'',component:SignInComponent,
        children:
        [
            {path:'register',component:RegisterComponent,canActivate:[SignInGuard],canDeactivate:[SignInGuard]},
            {path:'login',component:LoginComponent,canActivate:[SignInGuard]},
        ]
    }
]

@NgModule({
    imports:[
    RouterModule.forChild(signinRouterConfig)
    ],
    exports:[RouterModule]
})
export class SignInRoutingModule{

}