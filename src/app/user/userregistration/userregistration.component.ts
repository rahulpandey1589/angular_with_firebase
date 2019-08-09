import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { CanDeActivateGuard } from './userregistration.candeactivate.guard';
import { UserRegistrationRequestModel } from '../../shared/models/Request/UserRegistrationModel';
import { UserService } from '../../shared/services/DataService/user.service';
import { ServiceResponse } from '../../shared/models/Response/service.response';
import { RegisterUserApiResponse } from '../../shared/models/Response/RegisterUserApiResponse';
import { AuthService } from 'src/app/shared';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit, CanDeActivateGuard {

  userCreated = false;
  userRegModel: UserRegistrationRequestModel;

   constructor(private _userService: UserService, private authService: AuthService) {
   }

  userRegistrationForm = new FormGroup({
     firstName: new FormControl(''),
     lastName: new FormControl(''),
     emailAddress: new FormControl(''),
     password : new FormControl(''),
     confirmPassword: new FormControl('')
  });

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
    if (this.userRegistrationForm.dirty) {
      return confirm('Are you sure want to discard your changes ?');
    }
    return true;
  }

  onSubmit() {
    this.userRegModel = new UserRegistrationRequestModel();
    this.userRegModel.firstName = this.userRegistrationForm.controls['firstName'].value;
    this.userRegModel.lastName = this.userRegistrationForm.controls['lastName'].value;
    this.userRegModel.emailAddress = this.userRegistrationForm.controls['emailAddress'].value;
    this.userRegModel.password = this.userRegistrationForm.controls['password'].value;

    this.authService.signUp(this.userRegModel.emailAddress,this.userRegModel.password).subscribe(response =>{
       console.log(response);
    },error =>{
      console.log(error)
    })
  }

  validateUserName(userName: string): boolean {
    return true;
  }
}
