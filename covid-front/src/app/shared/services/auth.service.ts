import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from './../dto/UserDetails';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<UserDetails | null>;
  public user: Observable<UserDetails | null>;


constructor(
  private router: Router,
  private http: HttpClient
) {
  this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
  this.user = this.userSubject.asObservable();
 }

 public get userValue(){
  return this.userSubject.value;
 }

 login(username: string, password: string) {


  return this.http.post<any>(`${environment.apiAdminUrl}/auth`,null,{
    headers: new HttpHeaders({Authorization: `Basic ${this.basicAuthHeader(username, password)}`})
  }).pipe(map(user => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          user.authdata = this.basicAuthHeader(username, password);
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
      }));
}
basicAuthHeader(username: string, password: string): string {
  return window.btoa(`${username}:${password}`);

}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  this.userSubject.next(null);
  this.router.navigate(['/login']);
}
}
