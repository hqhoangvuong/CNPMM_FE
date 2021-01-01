import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRequest} from '../models/user-request';

const AUTH_API = 'http://hieuvm.xyz:8080/api/Auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'Login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  create(user: UserRequest, accDomainId: string): Observable<any> {
    return this.http.post(AUTH_API + 'Register/' + accDomainId, user, httpOptions);
  }
}
