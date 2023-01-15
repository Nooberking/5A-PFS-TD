import { AuthService } from './../services/auth.service';
import { HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError }from 'rxjs/operators';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(catchError(err => {
      if ([401].includes(err.status)){
        this.authService.logout();
      }
      const error = err.error.message || err.statusText;
      return throwError(() => error);
    }))
  }

}
