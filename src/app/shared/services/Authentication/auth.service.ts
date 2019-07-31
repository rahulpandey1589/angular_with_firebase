import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";


@Injectable()

export class AuthService{

   private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

   constructor(private _router: Router){    }

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
}