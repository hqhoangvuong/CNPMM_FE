import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimesheetTask} from '../models/timesheet-task';
import {AccountDomainService} from '../_services/account-domain.service';

@Component({
  selector: 'app-timesheet-task',
  templateUrl: './timesheet-task.component.html',
  styleUrls: ['./timesheet-task.component.scss']
})
export class TimesheetTaskComponent implements OnInit {

  constructor(private accountService: AccountDomainService) { }
  @Input() TaskModel: TimesheetTask;
  @Output() TaskModelChange = new EventEmitter<TimesheetTask>();
  @Output() ButtonClicked = new EventEmitter<[string, number]>();
  ProjectList: any;
  TaskList: any;
  ngOnInit(): void {
    this.accountService.getAllProject().subscribe(x => {
      this.ProjectList = x;
      if (this.TaskModel.Activity && this.TaskModel.Client){
        const currentSelectedPj = this.ProjectList.find(element => element.name === this.TaskModel.Client);
        this.selectedPj(currentSelectedPj.id);
      }
    });

    console.log(this.TaskModel);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  onBlurMethod(): void {
    this.TaskModelChange.emit(this.TaskModel);
  }

  handleClick(which: string): void {
    if (this.TaskModel.Id === 0 && which.includes('delete')) {
      return;
    }
    this.ButtonClicked.emit([which, this.TaskModel.Id]);
  }

  selectedPj(pjId: string): void {
    this.accountService.getAllTask(pjId).subscribe(x => {
      this.TaskList = x;
      console.log(x, pjId);
    });
  }

}
