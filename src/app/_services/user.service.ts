import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://103.153.73.107:8080/api/User/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCurrentUserBasicInfo(): Observable<any> {
    return this.http.get(API_URL + 'current', { responseType: 'text' });
  }

  getCurrentUserAvatar(): Observable<Blob> {
    return this.http.get(API_URL + 'getavatar', { responseType: 'blob' });
  }


  getCurrentUserDetails(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
