import {TimesheetTask} from './timesheet-task';

export class Timesheet {
  Id: string;
  UserId: string;
  StartDate: Date;
  EndDate: Date;
  TotalHour: number;
  Status: number;
  Tasks: Array<TimesheetTask>;

  constructor() {
    this.Id = '-1';
    this.Tasks = new Array<TimesheetTask>();
    this.Status = 0;
  }
}
