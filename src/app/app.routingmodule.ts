import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { FruitsComponent } from "./fruits/fruits.component";
import { BeveragesComponent } from "./beverages/beverages.component";
import { VegetablesComponent } from "./vegetables/vegetables.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./shared/services/Authentication/auth_guard.service";
import { AdminAuthGuard } from "./shared/services/Authentication/admin_auth_guard.service";


const appRoutes: Routes= [
 { path : '',component:HomeComponent }, 
 { path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard] },
 { path:'fruits',component:FruitsComponent,canActivate:[AuthGuard]},
 { path:'beverages',component:BeveragesComponent,canActivate:[AuthGuard]},
 { path:'vegetables',component:VegetablesComponent,canActivate:[AuthGuard]},
 { 
     path:'user',
     loadChildren:'./user/user.module#UserModule'
 },
 { 
     path:'admin',
     loadChildren:'./admin/admin.module#AdminModule',
     canActivate:[AdminAuthGuard]
 },
 { path:'notfound',component:PageNotFoundComponent,canActivate:[AuthGuard]}, 
 { path:'**', redirectTo:'notfound',pathMatch:'full'}
];



@NgModule({
 imports:[
     RouterModule.forRoot(appRoutes),
 ],
 exports:[
     RouterModule
 ]
})


export class AppRoutingModule{
}