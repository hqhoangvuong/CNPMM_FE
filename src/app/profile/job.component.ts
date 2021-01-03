import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import { Job } from '../models/job';
import {UserRequest} from '../models/user-request';
import {AddNewPersonDialogComponent} from '../account-domain-manager/hr-management/add-new-person-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UserDetailsModalComponent} from './details/user-details-modal.component';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() Jobs: Array<Job>;
  @Input() EmployeeCode: any;
  @Input() IsEdit: any;
  currentJob: any;
  displayedColumns: string[] = ['name', 'startdate', 'enddate', 'reason', 'action'];
  constructor(public datepipe: DatePipe,
              public dialog: MatDialog,
              private userService: UserService) { }

  ngOnInit(): void {
    this.Jobs.forEach(job => {
      job.startDate = this.datepipe.transform(job.startDate, 'MM/dd/yyyy');
      job.endDate = this.datepipe.transform(job.endDate, 'MM/dd/yyyy');
    });
    this.currentJob = this.Jobs.find(x => x.isActive === true);
  }

  onUpdateJob(jobId: any): void {
    const dialogRef = this.dialog.open(UserDetailsModalComponent, {
      width: '400px',
      data: this.Jobs.find(x => x.id === jobId)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.userService.updateUserJob(result).subscribe(x => console.log(x));
    });
    console.log(jobId);
  }
}
