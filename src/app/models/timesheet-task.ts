export class TimesheetTask {
  Id: number;
  AccountDomainId: string;
  AccountDomainName: string;
  ActivityId: string;
  Activity: string;
  Task: string;
  MonId: number;
  MonHr: number;

  TueId: number;
  TueHr: number;

  WedId: number;
  WedHr: number;

  ThuId: number;
  ThuHr: number;

  FriId: number;
  FriHr: number;

  SatId: number;
  SatHr: number;

  SunId: number;
  SunHr: number;

  constructor() {
    this.Id = 0;
    this.MonId = -1;
    this.TueId = -1;
    this.WedId = -1;
    this.ThuId = -1;
    this.FriId = -1;
    this.SatId = -1;
    this.SunId = -1;

    this.MonHr = 0;
    this.TueHr = 0;
    this.WedHr = 0;
    this.ThuHr = 0;
    this.FriHr = 0;
    this.SatHr = 0;
    this.SunHr = 0;
  }

  exportHour(): Array<number> {
    return [this.MonHr, this.TueHr, this.WedHr, this.ThuHr, this.FriHr, this.SatHr, this.SunHr];
  }

  exportHourId(): Array<number> {
    return [this.MonId, this.TueId, this.WedId, this.ThuId, this.FriId, this.SatId, this.SunId];
  }
}


