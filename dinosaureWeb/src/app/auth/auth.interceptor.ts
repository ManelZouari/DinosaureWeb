import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';


import { DinosaureService } from '../service/dinosaure.service';
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private dinosaureService : DinosaureService,private router: Router){}

//all request from the application will go through this function

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.dinosaureService.getToken())
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => { },
                    err => {
                        if (err.error.auth == false) {
                            this.router.navigateByUrl('/login');
                        }
                    })
            );
        }
    }
}
