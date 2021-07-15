import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { fromEvent, merge, Observable } from 'rxjs';




import { User } from 'src/app/models/user'; 
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { SignInService } from '../services/signin.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

@ViewChildren(FormControlName, {read: ElementRef}) formInputElements:ElementRef[]

  errors:any[]=[];
  loginForm:FormGroup;
  user:User;

  validationMessages:ValidationMessages;
  genericValidator:GenericValidator;
  displayMessage:DisplayMessage={};

  constructor(private fb:FormBuilder,
              private router:Router,
              private signInService:SignInService) 
  { 
    this.validationMessages = 
    {
      email: {
        required: 'Enter your email address',
        email: 'Invalid email address'
      },
      password: {
        required: 'Enter your password',
        rangeLength: 'Password must be between 6 and 15 characters'
      }
    };
    
    this.genericValidator=new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void 
  {
    this.loginForm=this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,CustomValidators.rangeLength([6, 15])]]
    })
  }

  ngAfterViewInit():void{
    let controlBlurs: Observable<any>[]= this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(()=>{
      this.displayMessage=this.genericValidator.process(this.loginForm);
    });
      
  }

  login(){
    if(this.loginForm.dirty && this.loginForm.valid){
      this.user=Object.assign({},this.user,this.loginForm.value);

      this.signInService.login(this.user)
                        .subscribe(
                          sucess=>{this.sucessProcessing(sucess)},
                          error=>{this.errorProcessing(error)}
                        )
      
    }
  }

  sucessProcessing(response:any){
    this.loginForm.reset();
    this.errors=[];

    this.signInService.LocalStorage.saveLocalUserData(response);

    this.router.navigate(['/home']);
  }

  errorProcessing(fail:any){
    this.errors=fail.error.errors;
  }



}
