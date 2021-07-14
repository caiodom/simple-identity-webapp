import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./signin.component";
import { SignInRoutingModule } from "./signin.route";
import { SignInService } from "./services/signin.service";
import { SignInGuard } from "./services/signin.guard";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations:[
        SignInComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SignInRoutingModule,

    ],
    providers:[
        SignInService,
        SignInGuard

    ]
})
export class SignInModule { }