import {Component, Input, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimesheetTask } from '../models/timesheet-task';
import { TimeSheetHour } from '../models/timesheet-hour';
import { AccountDomainService } from '../_services/account-domain.service';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.scss']
})
export class WeeklyReportComponent implements OnInit {
  panelOpenState = false;
  startDayRaw: any;
  @Input() startDay: any;
  @Input() endDay: any;
  ListTask: Array<TimesheetTask> = [];
  TimesheetHr: TimeSheetHour = new TimeSheetHour();
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.startDayRaw = this.startDay;
    this.startDay = this.datepipe.transform(this.startDay, 'MMMM dd');
    this.endDay = this.datepipe.transform(this.endDay, 'MMMM dd');
    this.addTask();
  }

  addTask(): void {
    const timesheetTask = new TimesheetTask();
    if (this.ListTask.length > 0) {
      timesheetTask.Id = this.ListTask.length + 1;
    }
    this.ListTask.push(timesheetTask);
    console.log(this.ListTask);
  }

  saveTask(): void {
    console.log(this.ListTask);
  }

  onTaskBlur(): void {
    this.TimesheetHr = new TimeSheetHour();
    for (const item of this.ListTask) {
      this.TimesheetHr.AddTime(item);
    }
  }

  handleTaskAction(action: any): void {
    if (action.includes('delete')) {
      if (this.ListTask.length === 0) {
        return;
      }

      this.ListTask.forEach((value, index) => {
        if (value.Id === action[1]) { this.ListTask.splice(index, 1); }
      });

      console.log(action[1], this.ListTask);
    }

    if (action.includes('copy')) {
      const copiedTask = Object.assign({}, this.ListTask[action[1]]);
      copiedTask.Id = Number(this.ListTask.length);
      this.ListTask.push(copiedTask);
      console.log(copiedTask);
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
}
