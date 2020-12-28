import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://hieuvm.xyz:8080/api/AccountDomain';
@Injectable({
  providedIn: 'root'
})
export class AccountDomainService {

  constructor(private http: HttpClient) { }
  getCurrentProject(): Observable<any> {
    return this.http.get(API_URL + '/getcurrent', { responseType: 'json' });
  }

  getAllProject(): Observable<any> {
    return this.http.get(API_URL + '/getall', {responseType: 'json'});
  }

  getAllTask(accDomainId: string): Observable<any> {
    return this.http.get(API_URL + '/gettask/?accDomainId=' + accDomainId, { responseType: 'json' });
  }
}
