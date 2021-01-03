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
  @Input() IsForReview: any;
  @Input() isAllowForEdit: any;
  fxFlex2 = '32%';
  @Output() FooterButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (this.IsForReview) {
      this.fxFlex2 = '20%';
    }
  }

  buttonClicked(typeOfButton: string): void {
    this.FooterButtonClicked.emit(typeOfButton);
  }
}
