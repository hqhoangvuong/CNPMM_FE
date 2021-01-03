import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-timesheet-weekly-header',
  templateUrl: './timesheet-weekly-header.component.html',
  styleUrls: ['./timesheet-weekly-header.component.scss']
})
export class TimesheetWeeklyHeaderComponent implements OnInit {
  weekDays: Array<string> = [];
  fxFlex1 = '15%';
  fxFlex2 = '32%';
  @Input() weekStart: any;
  @Input() isForReview: any;
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    if (this.isForReview) {
      this.fxFlex1 = '15%';
      this.fxFlex2 = '20%';
    }

    for (let i = 0; i <= 6; i++) {
      const weekDateFormatted: Date = new Date(this.weekStart);
      const str = moment(weekDateFormatted).add(i, 'days');
      this.weekDays.push(str.format('MM-DD'));
    }
  }
}
