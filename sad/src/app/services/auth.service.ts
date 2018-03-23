import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';

import config from '../config/config';

@Injectable()
export class AuthService {
  public authToken: string;
  constructor(private http: HttpClient) { }

  signClientIn(user): Observable<object> | any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(config.baseUrl + 'api/login', JSON.stringify(user), {headers: headers});
  };

  signClientUp(newUser): Observable<object> | any {
    console.log(newUser)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(config.baseUrl + 'api/signup', JSON.stringify(newUser), { headers: headers });
  };

  storeUserData(token) {
    localStorage.setItem('token', token);
    this.authToken = token;
  };

  getToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  };

  loggedIn() {
    return tokenNotExpired('token');
  };

  logout() {
    this.authToken = null;
    localStorage.clear();
  };

}
