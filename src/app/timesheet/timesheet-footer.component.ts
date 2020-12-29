import {Component, Input, OnInit, Output} from '@angular/core';
import {TimeSheetHour} from '../models/timesheet-hour';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-timesheet-footer',
  templateUrl: './timesheet-footer.component.html',
  styleUrls: ['./timesheet-footer.component.scss']
})
export class TimesheetFooterComponent implements OnInit {
  @Input() TimesheetHr: TimeSheetHour;
  @Output() FooterButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  buttonClicked(typeOfButton: string): void {
    this.FooterButtonClicked.emit(typeOfButton);
  }
}
