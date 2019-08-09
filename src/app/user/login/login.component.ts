import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/Authentication/auth.service';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from 'src/app/shared/models';
import { AuthorizeUser, AuthorizeUserErrorResponse } from 'src/app/shared/models/Response/authorize.user.response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  
  constructor(private _userService: AuthService,private _router: Router, private httpclient: HttpClient, private authService: AuthService) {

   }

  loginForm=new FormGroup({
     userName: new FormControl('',Validators.compose([Validators.required,Validators.email])),
     password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)]))
  });

   
 ngAfterViewInit(){

 }
 
  ngOnInit() {
    localStorage.removeItem('token');
  }



  onSubmit(){
    let userName = this.loginForm.controls['userName'].value;
    let password = this.loginForm.controls['password'].value;

    this.authService.signIn(userName,password).subscribe((serviceResponse:AuthorizeUser) => {
      if (serviceResponse.registered) {
           console.log("User is registered")
           localStorage.setItem('token',serviceResponse.idToken);
           this._router.navigate(['/admin']);
      }
    },(errorResponse:AuthorizeUserErrorResponse) =>{
       console.log(errorResponse.error.message)
    });
  }

  constructSubmitUrl(){
    
  }

onClick(){
}

}
