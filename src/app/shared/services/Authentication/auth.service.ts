import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ServiceResponse } from "../../models";
import { AuthorizeUser } from "../../models/Response/authorize.user.response";
import { map } from "rxjs/operators";
import { GlobalConfigurationModel } from "../../models/globalconfigModel";


interface AuthResponseData{
   kind:string,
   idToken:string,
   email:string,
   refreshToken:string,
   expiresIn:string,
   localId:string
}

@Injectable()

export class AuthService{

   private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

   constructor(private _router: Router, 
    private httpClient: HttpClient){    }

   get isLoggedIn(){
       return this.loggedIn.asObservable();
   }
   
    validateUser(userName:string,password:string):boolean{
        localStorage.setItem('token', 'JWT');
        this.loggedIn.next(true);
       return true;
    }


    logOut(){
        localStorage.removeItem('token');
        this.loggedIn.next(false);
        this._router.navigate(['/login']);
    }

    private hasToken() : boolean{
        return !!localStorage.getItem('token');
    }

    signUp(email:string, password:string){
        var requestURL  = GlobalConfigurationModel.firebaseGlobalUrl + "accounts:signUp?key=" + GlobalConfigurationModel.ApiAccessKey;

         return this.httpClient.post<AuthResponseData>(requestURL,
            {
              email:email,
              password:password,
              returnSecureToken:true
            }
         );
    }

    signIn(email:string,password:string){
        var requestUrl = GlobalConfigurationModel.firebaseGlobalUrl + "accounts:signInWithPassword?key=" + GlobalConfigurationModel.ApiAccessKey;
        var requestBody = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.httpClient.post(requestUrl,requestBody)
                  .pipe(map((response:AuthorizeUser)=> response));
    }
}