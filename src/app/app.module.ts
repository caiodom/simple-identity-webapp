import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './signin/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignInService } from './signin/services/signin.service';
import { SignInGuard } from './signin/services/signin.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInModule } from './signin/signin.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    SignInModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
