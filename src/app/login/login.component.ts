import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { ValidationMessages } from '../utils/generic-form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@ViewChildren(FormControlName, {read: ElementRef}) formInputElements:ElementRef

  errors:any[]=[];
  loginForm:FormGroup;
  usuario:Usuario;

  validationMessages:ValidationMessages;

  constructor() { }

  ngOnInit(): void {
  }

}
