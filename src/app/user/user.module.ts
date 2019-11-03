import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './userrouting.module';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';
import { AllUsersComponent } from './all-users/all-users.component';


@NgModule({
  declarations: [
      UserComponent,
      UserregistrationComponent,
      ForgotpasswordComponent,
      ViewuserComponent,
      LoginComponent,
      AllUsersComponent
  ],
  imports: [
   CommonModule,
   ReactiveFormsModule,
   UserRoutingModule
  ]
})


export class UserModule {
}
