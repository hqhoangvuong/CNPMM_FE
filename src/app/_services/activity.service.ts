import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../models/activity';

const API_URL = 'http://hieuvm.xyz:8080/';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivityByAccDomainId(accDomainId: string): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(API_URL + 'getactivity/' + accDomainId, {responseType: 'json'});
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(API_URL + 'addactivity', activity);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(API_URL + 'updateactivity', activity);
  }

  deleteActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(API_URL + 'deleteactivity', activity);
  }
}
