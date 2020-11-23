import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://103.153.73.107:8080/api/Directory';
@Injectable({
  providedIn: 'root'
})
export class DirectoryService{
  constructor(private http: HttpClient) { }
  getDirectory(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }
}
