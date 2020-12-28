import {Component, Input, OnInit} from '@angular/core';
import {TimeSheetHour} from '../models/timesheet-hour';

@Component({
  selector: 'app-timesheet-footer',
  templateUrl: './timesheet-footer.component.html',
  styleUrls: ['./timesheet-footer.component.scss']
})
export class TimesheetFooterComponent implements OnInit {
  @Input() TimesheetHr: TimeSheetHour;
  constructor() { }

  ngOnInit(): void { }

}
