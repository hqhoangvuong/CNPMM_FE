import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import {TimesheetService} from '../_services/timesheet.service';
import * as moment from 'moment';
import {Timesheet} from '../models/timesheet';
import {TimesheetTask} from '../models/timesheet-task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  isRender = false;
  weekStart: any;
  days = ['MonHr', 'TueHr', 'WedHr', 'ThuHr', 'FriHr', 'SatHr', 'SunHr'];
  weekEnd: any;
  ExistedTimesheet: Timesheet = new Timesheet();
  constructor(private token: TokenStorageService,
              private userService: UserService,
              private timesheetService: TimesheetService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserDetails().subscribe(userDetail => {
      this.currentUser = userDetail;
      this.getWeek();
      this.timesheetService.getTimesheetByDate(this.currentUser.id,
        moment(this.weekStart).utc().toDate(),
        moment(this.weekEnd).utc().toDate()).subscribe(existTimesheet => {
        if (!existTimesheet) {
          this.ExistedTimesheet.StartDate = this.weekStart;
          this.ExistedTimesheet.EndDate = this.weekEnd;
          this.isRender = true;
        } else {
          this.ExistedTimesheet.Id = existTimesheet.id;
          this.ExistedTimesheet.UserId = existTimesheet.userId;
          this.ExistedTimesheet.Status = existTimesheet.status;
          this.ExistedTimesheet.TotalHour = existTimesheet.totalHour;
          this.ExistedTimesheet.StartDate = moment.utc(existTimesheet.startDate).local().toDate();
          this.ExistedTimesheet.EndDate = moment.utc(existTimesheet.endDate).local().toDate();
          this.ExistedTimesheet.Tasks = new Array<TimesheetTask>();
          if (existTimesheet.tasks) {
            existTimesheet.tasks.forEach(taskitem => {
              const task: TimesheetTask = new TimesheetTask();
              task.Id = taskitem.id;
              task.AccountDomainId = taskitem.accountDomainId;
              task.AccountDomainName = taskitem.accountDomainName;
              task.ActivityId = taskitem.activityId;
              task.Activity = taskitem.activityDescription;
              task.Task = taskitem.task;
              if (taskitem.taskHours) {
                taskitem.taskHours.forEach(taskHour => {
                  const taskDay: Date = moment.utc(taskHour.workingDate).toDate();
                  const dayOfWeek = this.days[taskDay.getDay()];
                  switch (dayOfWeek) {
                    case this.days[0]: {
                      task.MonHr = taskHour.workingHour;
                      task.MonId = taskHour.id;
                      break;
                    }
                    case this.days[1]: {
                      task.TueHr = taskHour.workingHour;
                      task.TueId = taskHour.id;
                      break;
                    }
                    case this.days[2]: {
                      task.WedHr = taskHour.workingHour;
                      task.WedId = taskHour.id;
                      break;
                    }
                    case this.days[3]: {
                      task.ThuHr = taskHour.workingHour;
                      task.ThuId = taskHour.id;
                      break;
                    }
                    case this.days[4]: {
                      task.FriHr = taskHour.workingHour;
                      task.FriId = taskHour.id;
                      break;
                    }
                    case this.days[5]: {
                      task.SatHr = taskHour.workingHour;
                      task.SatId = taskHour.id;
                      break;
                    }
                    case this.days[6]: {
                      task.SunHr = taskHour.workingHour;
                      task.SunId = taskHour.id;
                      break;
                    }
                  }
                });
              }
              this.ExistedTimesheet.Tasks.push(task);
            });
          }
          this.isRender = true;
        }
      });
    });
  }

  getWeek(): void {
    const current = new Date();
    const startDay = current.getDate() - current.getDay() + 1;
    this.weekStart = new Date(current.setDate(startDay));
    this.weekEnd = new Date(moment(this.weekStart).add(6, 'days').toString());
  }
}
