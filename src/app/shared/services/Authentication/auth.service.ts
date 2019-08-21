import { Injectable } from "@angular/core";
import {  BehaviorSubject, throwError, Subject } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {  User } from "../../models/Response/authorize.user.response";
import { map, catchError, tap } from "rxjs/operators";
import { GlobalConfigurationModel } from "../../models/globalconfigModel";
import { environment } from "src/environments/environment";
import {AuthResponseData} from 'src/app/shared/models/Response/auth.response';



@Injectable()

export class AuthService{

   user = new BehaviorSubject<User>(null);
   private tokenExpirationTimer : any;

   constructor(private _router: Router, 
    private httpClient: HttpClient){    }

    private hasToken() : boolean{
        return !!localStorage.getItem('token');
    }

    signUp(email:string, password:string){
        var requestURL  = GlobalConfigurationModel.firebaseGlobalUrl + "accounts:signUp?key=" + environment.firebaseAPIKey;

         return this.httpClient.post<AuthResponseData>(requestURL,
            {
              email:email,
              password:password,
              returnSecureToken:true
            }
         );
         
         
         /*.pipe(catchError(this.handleError),tap(resdata => {
             this.handleAuthentication(resdata.email,resdata.localId,
                resdata.idToken,+resdata.expiresIn)
         }))
         */
    }

    signIn(email:string,password:string){
        var requestUrl = GlobalConfigurationModel.firebaseGlobalUrl + "accounts:signInWithPassword?key=" + environment.firebaseAPIKey;
        var requestBody = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.httpClient.post<AuthResponseData>(requestUrl,requestBody)
                  .pipe(catchError(this.handleError),tap(resdata=>{
                    this.handleAuthentication(resdata.email,resdata.localId,
                        resdata.idToken,+resdata.expiresIn)
                  }));
    }

    signOut(){
      this.user.next(null);
      localStorage.clear();
      this._router.navigate(['/login']);
      if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer);
      }
      this.tokenExpirationTimer = null;
    }

    autoLogOut(expirationDuration: number){
      this.tokenExpirationTimer =    setTimeout(() => {
           this.signOut();
         }, expirationDuration);
    }
    
    private handleAuthentication(email:string,userId:string,token:string, expiresIn:number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email,userId,token,expirationDate);
        this.user.next(user);
        this.autoLogOut(expiresIn*1000);
    }

    private handleError(errorRespmse: HttpErrorResponse){
        let errorMessage ="An Unknown error occured!!!";
        if(errorRespmse.error || !errorRespmse.error.error){
          return throwError(errorMessage);
        }
         
        switch(errorRespmse.error.error.message){
          case  'EMAIL_EXISTS':
            errorMessage="This email address already exists."
          
        }
        return throwError(errorMessage);
       }
}