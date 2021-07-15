import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { fromEvent, merge, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { SignInService } from '../services/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit,AfterViewInit {

@ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  
  errors:any[]=[];
  registerForm:FormGroup;
  user:User;

  validationMessages:ValidationMessages;
  genericValidator:GenericValidator;
  displayMessage:DisplayMessage={};

  unsavedChanges:boolean;
  constructor(private fb: FormBuilder,
    private signinService: SignInService,
    private router: Router) { 

      this.validationMessages = 
    {
      email: {
        required: 'Enter your email address',
        email: 'Invalid email address'
      },
      password: {
        required: 'Enter your password',
        rangeLength: 'Password must be between 6 and 15 characters'
      },
      confirmPassword: {
        required: 'Re-enter your password',
        rangeLength: 'Password must be between 6 and 15 characters',
        equalTo: 'Passwords not match!!!'
      }
    };

      this.genericValidator = new GenericValidator(this.validationMessages);
    }

  ngOnInit(): void {

    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let passwordConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: password,
      confirmPassword: passwordConfirm
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.process(this.registerForm);
      this.unsavedChanges = true;
    });
  }


  registerAccount(){
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);

      this.signinService.registerUser(this.user)
      .subscribe(
          sucesso => {this.sucessProcessing(sucesso)},
          falha => {this.errorProcessing(falha)}
      );

      this.unsavedChanges = false;
    }
  }
  sucessProcessing(response:any){
    this.registerForm.reset();
    this.errors=[];

    this.signinService.LocalStorage.saveLocalUserData(response);

    this.router.navigate(['/home']);
  }

  errorProcessing(fail:any){
    this.errors=fail.error.errors;
  }

}

