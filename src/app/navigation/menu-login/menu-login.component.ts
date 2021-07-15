import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage-utils';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html'
})
export class MenuLoginComponent implements OnInit {

  token:string="";
  user:any;
  email:string="";
  localStorageUtils=new LocalStorageUtils();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loggedUser():boolean{
    this.token=this.localStorageUtils.getUserToken();
    this.user=this.localStorageUtils.getUser();

    if(this.user)
      this.email=this.user.email;

      return this.token!==null;
  }

  logout(){
    this.localStorageUtils.clearUserToken();
    this.router.navigate(['/home']);
  }

}
