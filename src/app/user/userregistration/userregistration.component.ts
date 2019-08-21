import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { CanDeActivateGuard } from './userregistration.candeactivate.guard';
import { UserRegistrationRequestModel } from '../../shared/models/Request/UserRegistrationModel';
import { UserService } from '../../shared/services/DataService/user.service';
import { AuthService } from 'src/app/shared';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AuthResponseData } from 'src/app/shared/models/Response/auth.response';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit, CanDeActivateGuard {

  userCreated = false;
  userRegModel: UserRegistrationRequestModel;
  userSignUpModel: AuthResponseData = new AuthResponseData();

   constructor(private _userService: UserService, 
              private authService: AuthService,
              private _router: Router) {
   }

  userRegistrationForm = new FormGroup({
     emailAddress: new FormControl('',Validators.compose([Validators.required, Validators.email])),
     password : new FormControl('',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
     confirmPassword: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)]))
  });

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
    if (this.userRegistrationForm.dirty && isNullOrUndefined(this.userSignUpModel.idToken)) {
      return confirm('Are you sure want to discard your changes ?');
    }
    return true;
  }

  onSubmit() {
    this.userRegModel = new UserRegistrationRequestModel();
    this.userRegModel.emailAddress = this.userRegistrationForm.controls['emailAddress'].value;
    this.userRegModel.password = this.userRegistrationForm.controls['password'].value;

    this.authService.signUp(this.userRegModel.emailAddress,this.userRegModel.password).subscribe((serviceResponse:AuthResponseData)=>{
      this.userSignUpModel = serviceResponse
            if(!isNullOrUndefined(this.userSignUpModel.idToken)){
              alert('User Created Successfully!!!');
              this._router.navigate(['/user/login']);
            }
    },error =>{
       console.log(error);
    });
  }
}
