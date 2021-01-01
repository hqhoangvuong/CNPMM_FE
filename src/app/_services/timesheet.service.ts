import { Injectable } from '@angular/core';
import {Timesheet} from '../models/timesheet';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {DatePipe} from '@angular/common';
import {TimesheetTask} from '../models/timesheet-task';
import {TimesheetHourRequest} from '../models/timesheet-hour-request';

const API_URL = 'http://hieuvm.xyz:8080/api/Timesheet/';

@Injectable({
  providedIn: 'root'
})

export class TimesheetService {

  constructor(private http: HttpClient,
              private datePipe: DatePipe) { }

  addTimeSheet(timesheet: Timesheet): Observable<any> {
    return this.http.post<Timesheet>(API_URL + 'add', timesheet);
  }

  getTimesheetByMonth(month: number): Observable<any> {
    return this.http.get(API_URL + 'bymonth?month=' + month, { responseType: 'json' });
  }

  getTimesheetByDate(userId: string, dateFrom: Date, dateTo: Date): Observable<any> {
    return this.http.get(API_URL + 'gettimesheetbydate?usrId=' + userId
      + '&dateFrom=' + this.datePipe.transform(dateFrom, 'MM/dd/yyyy')
      + '&dateTo=' + this.datePipe.transform(dateTo, 'MM/dd/yyyy'), { responseType: 'json' });
  }

  addTasks(timesheetId: string, tasks: Array<TimesheetTask>): Observable<any> {
    return this.http.post<TimesheetTask>(API_URL + 'task/' + timesheetId, tasks);
  }

  addHour(hour: TimesheetHourRequest): Observable<TimesheetHourRequest> {
    return this.http.post<TimesheetHourRequest> (API_URL + 'addhour', hour);
  }
}
