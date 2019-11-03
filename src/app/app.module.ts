import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routingmodule';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { HomeComponent } from './home/home.component';
import { CanDeActivateGuard } from './user/userregistration/userregistration.candeactivate.guard';

import * as Shared from './shared';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Shared.HeaderComponent,
    Shared.FooterComponent,
    DashboardComponent,
    Shared.PageNotFoundComponent,
    FruitsComponent,
    VegetablesComponent,
    BeveragesComponent,
    Shared.ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Shared.AuthService,
    Shared.AuthGuard,
    CanDeActivateGuard,
    Shared.ProductService,
    Shared.AdminAuthGuard,
    Shared.UserService,
     {
       provide: HTTP_INTERCEPTORS,
       useClass: Shared.HttpServiceInterceptor,
       multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
