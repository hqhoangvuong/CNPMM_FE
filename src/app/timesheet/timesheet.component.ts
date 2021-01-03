import {Component, Input, OnInit} from '@angular/core';
import {TimesheetService} from '../_services/timesheet.service';
import {Timesheet} from '../models/timesheet';
import {TimesheetTask} from '../models/timesheet-task';
import * as moment from 'moment';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  days = ['MonHr', 'TueHr', 'WedHr', 'ThuHr', 'FriHr', 'SatHr', 'SunHr'];
  TimesheetRaw: any;
  Timesheet: Timesheet[];
  @Input()IsForReview: any;
  @Input() userId: string;
  constructor(private timesheetService: TimesheetService) { }

  ngOnInit(): void {
    if (this.IsForReview === null) {
      this.IsForReview = false;
    }

    if (!this.userId) {
      this.userId = '-1';
    }
    this.timesheetService.getTimesheetByMonth(moment.utc().format('YYYY-MM-DD'), this.userId).subscribe(x => {
      if (x)
      {
        this.Timesheet = new Array<Timesheet>();
        this.TimesheetRaw = x;
        this.TimesheetRaw.forEach(item => {
          const timesheet: Timesheet = new Timesheet();
          timesheet.Id =  item.id;
          timesheet.UserId = item.userId;
          timesheet.StartDate = moment.utc(item.startDate).toDate();
          timesheet.EndDate = moment.utc(item.endDate).toDate();
          timesheet.TotalHour  = item.totalHour;
          timesheet.Status = item.status;
          if (item.tasks) {
            item.tasks.forEach(taskitem => {
              const task: TimesheetTask = new TimesheetTask();
              task.Id = taskitem.id;
              task.AccountDomainId = taskitem.accountDomainId;
              task.AccountDomainName = taskitem.accountDomainName;
              task.ActivityId = taskitem.activityId;
              task.Activity = taskitem.activityDescription;
              task.Task = taskitem.task;
              if (taskitem.taskHours) {
                taskitem.taskHours.forEach(taskhour => {
                  const taskDay: Date = moment.utc(taskhour.workingDate).toDate();
                  const dayOfWeek = this.days[taskDay.getDay()];
                  switch (dayOfWeek) {
                    case this.days[0]: {
                      task.MonHr = taskhour.workingHour;
                      break;
                    }
                    case this.days[1]: {
                      task.TueHr = taskhour.workingHour;
                      break;
                    }
                    case this.days[2]: {
                      task.WedHr = taskhour.workingHour;
                      break;
                    }
                    case this.days[3]: {
                      task.ThuHr = taskhour.workingHour;
                      break;
                    }
                    case this.days[4]: {
                      task.FriHr = taskhour.workingHour;
                      break;
                    }
                    case this.days[5]: {
                      task.SatHr = taskhour.workingHour;
                      break;
                    }
                    case this.days[6]: {
                      task.SunHr = taskhour.workingHour;
                      break;
                    }
                  }
                });
              }
              timesheet.Tasks.push(task);
            });
          }
          this.Timesheet.push(timesheet);
        });
      } else {
        this.Timesheet = new Array<Timesheet>();
        const timesheet = new Timesheet();
        const now = moment();
        const fromDate = now.clone().weekday(1);
        const toDate = now.clone().weekday(7);
        timesheet.StartDate = fromDate.toDate();
        timesheet.EndDate = toDate.toDate();
        timesheet.UserId = this.userId;
        this.Timesheet.push(timesheet);
      }
    });
  }
}
