import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './adminrouting.module';
import { AdminDashboardComponent } from './dashboard/admindashboard.component';
import { ProductregistrationComponent } from './products/productregistration/productregistration.component';
import { ProductCategoryComponent } from './products/product-category/product-category.component';
import { AdminComponent } from './admin.component';



@NgModule({
   declarations: [
     AdminDashboardComponent,
     ProductregistrationComponent,
     ProductCategoryComponent,
     AdminComponent
   ],
   imports: [
       CommonModule,
       ReactiveFormsModule,
       AdminRoutingModule
   ]
})


export class AdminModule {

}
