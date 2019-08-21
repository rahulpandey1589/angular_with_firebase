import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/Authentication/auth.service";
import { take, exhaustMap } from "rxjs/operators";


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService){

  }

    intercept(req: HttpRequest<any>, next: HttpHandler){
         return  this.authService.user.pipe(
               take(1),
               exhaustMap(user =>{ 
                   if(!user){
                       return next.handle(req);
                   }
                 const modifiedReq = req.clone({
                     params: new HttpParams().set('auth',user.getToken())
                 });
                return next.handle(modifiedReq);
               })
           );
    }
}