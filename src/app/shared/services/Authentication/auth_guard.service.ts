import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

   constructor(private _authService: AuthService,
              private _router: Router){   }

   canActivate(route: ActivatedRouteSnapshot, 
               state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if(localStorage.getItem('token')){
            return true;
        }
        return this._router.navigate['/user/login']
    };

}
