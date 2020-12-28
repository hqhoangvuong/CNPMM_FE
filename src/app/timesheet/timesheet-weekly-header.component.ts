import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-timesheet-weekly-header',
  templateUrl: './timesheet-weekly-header.component.html',
  styleUrls: ['./timesheet-weekly-header.component.scss']
})
export class TimesheetWeeklyHeaderComponent implements OnInit {
  weekDays: Array<string> = [];
  @Input() weekStart: any;
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    for (let i = 0; i <= 6; i++) {
      const date = new Date().setDate(this.weekStart.getDate() + i);
      const str = this.datepipe.transform(date, 'MM/dd');
      this.weekDays.push(str);
    }
  }

}
