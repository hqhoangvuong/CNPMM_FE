import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimesheetTask} from '../models/timesheet-task';

@Component({
  selector: 'app-timesheet-task',
  templateUrl: './timesheet-task.component.html',
  styleUrls: ['./timesheet-task.component.scss']
})
export class TimesheetTaskComponent implements OnInit {

  constructor() { }
  @Input() TaskModel: TimesheetTask;
  @Output() TaskModelChange = new EventEmitter<TimesheetTask>();

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  onBlurMethod(): void {
    this.TaskModelChange.emit(this.TaskModel);
  }
}
