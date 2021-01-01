export class TimesheetHourRequest {
  Id: number;
  TimesheetTaskId: number;
  WorkingDate: Date;
  WorkingHour: number;

  constructor() {
    this.Id = -1;
  }
}
