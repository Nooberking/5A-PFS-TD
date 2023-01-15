import { AuthService } from './../services/auth.service';
import { environment } from './../../../environments/environment';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = this.authService.userValue;
    const isLoggedIn = user?.authdata;
    const isApiUrl = req.url.startsWith(environment.apiAdminUrl);
    if(isLoggedIn && isApiUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${user.authdata}`
        }
      });
    }
    return next.handle(req);
  }

}

