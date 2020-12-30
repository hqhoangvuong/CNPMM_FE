import { Injectable } from '@angular/core';
import {Timesheet} from '../models/timesheet';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ConfigService} from './config.service';

const API_URL = 'http://hieuvm.xyz:8080/api/Timesheet/';

@Injectable({
  providedIn: 'root'
})

export class TimesheetService {

  constructor(private http: HttpClient) { }

  addTimeSheet(timesheet: Timesheet): Observable<any> {
    return this.http.post<Timesheet>(API_URL + 'add', timesheet );
  }


}
