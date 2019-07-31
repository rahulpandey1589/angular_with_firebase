import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private _authService: AuthService,
        private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem('token')) {
            return true;
        }
        return this._router.navigate['/user/login']
    };
}