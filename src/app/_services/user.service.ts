import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {Job} from '../models/job';

const API_URL = 'http://hieuvm.xyz:8080/api/User/';

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
    return this.http.get(API_URL + 'currentfull', { responseType: 'json' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAllUserOfAccountDomain(accDomainId: string): Observable<any> {
    return this.http.get(API_URL + 'getuserbyaccountdomain?accDomainId=' + accDomainId, { responseType: 'json' });
  }

  getCurrentUserAccountDomain(): Observable<any> {
    return this.http.get(API_URL + 'getcurrentuseraccountdomain', { responseType: 'json' });
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(API_URL + 'getuser?userId=' + userId,  { responseType: 'json' });
  }

  updateUserInfo(user: User): Observable<User> {
    return this.http.post<User>(API_URL + 'updateuserinfo', user);
  }

  updateUserJob(job: Job): Observable<Job> {
    return this.http.post<Job>(API_URL + 'updateuserjob', job);
  }

}
