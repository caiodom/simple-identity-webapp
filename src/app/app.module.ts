import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInModule } from './signin/signin.module';
import { NavigationModule } from './navigation/navigation.module';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    SignInModule,
    NavigationModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
