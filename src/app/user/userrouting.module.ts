import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user.component";
import { UserregistrationComponent } from "./userregistration/userregistration.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { ViewuserComponent } from "./viewuser/viewuser.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "../shared/services/Authentication/auth_guard.service";
import { CanDeActivateGuard } from "./userregistration/userregistration.candeactivate.guard";
import { AllUsersComponent } from "./all-users/all-users.component";

const userRoutingRoutes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            {
                path: '',
                component: UserComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: UserregistrationComponent,
                canDeactivate: [CanDeActivateGuard]
            },
            {
                path: 'forgotpassword',
                component: ForgotpasswordComponent
            },
            {
                path: 'loadAllUsers',
                component: AllUsersComponent
            },
            {
                path: 'viewuser',
                component: ViewuserComponent,
               canActivate: [AuthGuard]
            }

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoutingRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]

})


export class UserRoutingModule {

}