import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() Jobs: any;
  @Input() EmployeeCode: any;
  currentJob: any;
  displayedColumns: string[] = ['name', 'startdate', 'enddate', 'reason'];
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.Jobs.forEach(job => {
      job.startDate = this.datepipe.transform(job.startDate, 'MM/dd/yyyy');
      job.endDate = this.datepipe.transform(job.endDate, 'MM/dd/yyyy');
    });
    this.currentJob = this.Jobs.find(x => x.isActive === true);
  }
}
