import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private _userService: AuthService,private _router: Router) {

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
     let response = this._userService.validateUser('rahul','password');
     if(response){
       this._router.navigate(['/admin']);
     }
  }
  
}
