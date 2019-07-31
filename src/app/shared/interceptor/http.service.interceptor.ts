import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";



export class HttpServiceInterceptor implements HttpInterceptor{

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): 
        Observable<HttpEvent<any>>{
         req = req.clone({headers:req.headers.set('Content-type','application/json')});
         return next.handle(req);
    }
}