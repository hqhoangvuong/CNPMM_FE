export class TimesheetTask {
  Id: number;
  Client: string;
  Activity: string;
  Task: string;
  MonHr: number;
  TueHr: number;
  WedHr: number;
  ThuHr: number;
  FriHr: number;
  SatHr: number;
  SunHr: number;

  constructor() {
    this.Id = 0;
    this.MonHr = 0;
    this.TueHr = 0;
    this.WedHr = 0;
    this.ThuHr = 0;
    this.FriHr = 0;
    this.SatHr = 0;
    this.SunHr = 0;
  }
}


