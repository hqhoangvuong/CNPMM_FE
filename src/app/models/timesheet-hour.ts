import {TimesheetTask} from './timesheet-task';

export class TimeSheetHour {
  MonHrs: number;
  TueHrs: number;
  WedHrs: number;
  ThuHrs: number;
  FriHrs: number;
  SatHrs: number;
  SunHrs: number;
  TotalHrs: number;

constructor() {
  this.MonHrs = 0;
  this.TueHrs = 0;
  this.WedHrs = 0;
  this.ThuHrs = 0;
  this.FriHrs = 0;
  this.SatHrs = 0;
  this.SunHrs = 0;
  this.TotalHrs = 0;
}

  AddTime(timesheettask: TimesheetTask): void {
    this.MonHrs += Number(timesheettask.MonHr);
    this.TueHrs += Number(timesheettask.TueHr);
    this.WedHrs += Number(timesheettask.WedHr);
    this.ThuHrs += Number(timesheettask.ThuHr);
    this.FriHrs += Number(timesheettask.FriHr);
    this.SatHrs += Number(timesheettask.SatHr);
    this.SunHrs += Number(timesheettask.SunHr);
    this.TotalHrs = this.MonHrs + this.TueHrs + this.WedHrs + this.ThuHrs + this.FriHrs + this.SatHrs + this.SunHrs;
  }
}
