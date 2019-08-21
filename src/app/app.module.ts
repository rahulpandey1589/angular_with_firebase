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


/*These components are added as a part of POC. Can be removed later*/
import {StopWatchComponent} from './poc/stopwatch.component';
import {StopWatchParent} from './poc/stopwatch.parent.component';
import {AngularLifeCycleHooks} from './poc/lifecyclehooks.component';
/*-----------------------------------------------------------------*/


import {
  HttpServiceInterceptor ,
  ProductInfoComponent ,
  FooterComponent ,
  HeaderComponent,
  PageNotFoundComponent,
  UserService,
  AdminAuthGuard,
  ProductService,
  AuthGuard,
  AuthService } from './shared';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    FruitsComponent,
    VegetablesComponent,
    BeveragesComponent,
    ProductInfoComponent,
    /*POC Component. Can be removed later stage*/
    StopWatchComponent,
    StopWatchParent,
    AngularLifeCycleHooks
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CanDeActivateGuard,
    ProductService,
    AdminAuthGuard,
    UserService,
     {
       provide: HTTP_INTERCEPTORS,
       useClass: HttpServiceInterceptor,
       multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
