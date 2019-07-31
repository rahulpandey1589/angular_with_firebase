import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


import { AdminDashboardComponent } from "./dashboard/admindashboard.component";
import { ProductregistrationComponent } from "./products/productregistration/productregistration.component";
import { ProductCategoryComponent } from "./products/product-category/product-category.component";
import { AdminComponent } from "./admin.component";


const adminRoutingRoutes: Routes=[
    {
    path:'',component:AdminComponent,
    children:[
        {
            path:'dashboard',
            component:AdminDashboardComponent
        },
        {
            path:'register-prod',
            component:ProductregistrationComponent
        },
        {
            path:'prod-category',
            component:ProductCategoryComponent
        }
    ]
}]

@NgModule({
imports:[
    RouterModule.forChild(adminRoutingRoutes)
],
declarations:[],
exports:[
    RouterModule
]
})


export class AdminRoutingModule
{

}