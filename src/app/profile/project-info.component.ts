import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  @Input() Projects: any;
  displayedColumns: string[] = ['primary', 'project', 'client', 'startdate', 'enddate'];
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.Projects.forEach(job => {
      job.startDate = this.datepipe.transform(job.startDate, 'MM/dd/yyyy');
      job.endDate = this.datepipe.transform(job.endDate, 'MM/dd/yyyy');
    });
  }

}
