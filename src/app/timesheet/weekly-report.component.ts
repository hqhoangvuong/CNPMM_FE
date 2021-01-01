import {Component, Input, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimesheetTask } from '../models/timesheet-task';
import { TimeSheetHour } from '../models/timesheet-hour';
import {Timesheet} from '../models/timesheet';
import {UserService} from '../_services/user.service';
import {TimesheetService} from '../_services/timesheet.service';
import * as moment from 'moment';
import {TimesheetHourRequest} from '../models/timesheet-hour-request';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.scss']
})
export class WeeklyReportComponent implements OnInit {
  @Input() Timesheet: Timesheet;
  isRender = false;
  panelOpenState = false;
  TimesheetHr: TimeSheetHour = new TimeSheetHour();
  constructor(private userService: UserService,
              private timesheetService: TimesheetService) { }

  ngOnInit(): void {
    console.log(this.Timesheet);
    if (this.Timesheet) {

      if (!this.Timesheet.Tasks) {
        this.Timesheet.Tasks = new Array<TimesheetTask>();
      }
      this.addTask();
      this.onTaskBlur();
    } else {
      this.Timesheet = new Timesheet();
      this.userService.getCurrentUserDetails().subscribe(x => {
        this.Timesheet.UserId = x.id;
      });
      this.addTask();
    }
    console.log(this.Timesheet.StartDate, this.Timesheet.EndDate);
    this.isRender = true;
  }

  addTask(): void {
    const timesheetTask = new TimesheetTask();
    timesheetTask.Id = this.Timesheet.Tasks.length;
    this.Timesheet.Tasks.push(timesheetTask);
  }

  onTaskBlur(): void {
    this.TimesheetHr = new TimeSheetHour();
    for (const item of this.Timesheet.Tasks) {
      this.TimesheetHr.AddTime(item);
    }
  }

  handleTaskAction(action: any): void {
    if (action.includes('delete')) {
      if (this.Timesheet.Tasks.length === 0) {
        return;
      }
      this.Timesheet.Tasks.forEach((value, index) => {
        if (value.Id === action[1]) { this.Timesheet.Tasks.splice(index, 1); }
      });
    }

    if (action.includes('copy')) {
      const copiedTask = Object.assign({}, this.Timesheet.Tasks[action[1]]);
      copiedTask.Id = Number(this.Timesheet.Tasks.length);
      this.Timesheet.Tasks.push(copiedTask);
    }
    this.onTaskBlur();
  }

  handleTaskActionButtonClicked(typeOfButton: string): void {
    switch (typeOfButton){
      case 'add-new-task': {
        this.addTask();
        break;
      }
    }
  }

  onSave(): void {
    if (this.Timesheet.Id === null) {
      this.timesheetService.addTimeSheet(this.Timesheet).subscribe(data => this.Timesheet = data);
    }
    this.timesheetService.addTasks(this.Timesheet.Id, this.Timesheet.Tasks).subscribe(savedTasks => {
      console.log(savedTasks);
      savedTasks.tasks.forEach((element, index) => {
        this.Timesheet.Tasks[index].Id = element.id;
        const workedHour: Array<number> = this.Timesheet.Tasks[index].exportHour();
        const workedHourId: Array<number> = this.Timesheet.Tasks[index].exportHourId();
        for (let i = 0; i < 7; i++) {
          const hour: TimesheetHourRequest = new TimesheetHourRequest();
          const utcDate: Date = new Date(moment(this.Timesheet.StartDate).add(i, 'days').toString());

          hour.Id = workedHourId[i];
          hour.TimesheetTaskId = this.Timesheet.Tasks[index].Id;
          hour.WorkingDate = utcDate;
          hour.WorkingHour = workedHour[i];
          this.timesheetService.addHour(hour).subscribe(data =>  console.log(data));
        }
      });
    });
  }

  onSubmit(): void {
    this.Timesheet.Status = 10;
    this.timesheetService.addTimeSheet(this.Timesheet).subscribe();
}
}
