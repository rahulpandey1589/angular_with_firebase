import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }
  
  forgotPasswordForm= new FormGroup({
    emailAddress: new FormControl('',[Validators.required,Validators.email])
  })
  ngOnInit() {
  }

  sendPasswordLink(){
    alert('Password Link Sent!!!');
  }

}
