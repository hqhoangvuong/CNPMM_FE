import { Component, OnInit } from '@angular/core';
import {TimesheetService} from '../../_services/timesheet.service';
import {UserService} from '../../_services/user.service';
import * as moment from 'moment';
import {TimesheetOverview} from '../../models/timesheet-overview';

@Component({
  selector: 'app-timesheet-management',
  templateUrl: './timesheet-management.component.html',
  styleUrls: ['./timesheet-management.component.scss']
})
export class TimesheetManagementComponent implements OnInit {
  accountDomainUserList: any;
  tableField: Array<string>;
  isRender: any;
  selectedUserId = '-1';
  isRenderTimesheetDetails = false;
  userOverView: Array<TimesheetOverview>;
  now: any = moment();
  currentUserAccDomain: any;

  constructor(private timesheetService: TimesheetService,
              private userService: UserService) {
    this.userOverView = new Array<TimesheetOverview>();
    this.isRender = false;
    this.tableField = ['userid', 'name', 'numberofloggedtask', 'numberofsubmittedtimesheet', 'totalhourlogged', 'action'];
  }

  ngOnInit(): void {
    let count = 0;
    this.userService.getCurrentUserAccountDomain().subscribe(accDomain => {
      this.currentUserAccDomain = accDomain;
      this.userService.getAllUserOfAccountDomain(this.currentUserAccDomain.id).subscribe(data => {
        this.accountDomainUserList = data;
        this.accountDomainUserList.forEach(user => {
          user.jobs.filter(job => job.isActive === false);
        });

        this.accountDomainUserList.forEach( user => {
            this.timesheetService.getOverView(user.id, moment.utc(this.now).format('MM/DD/YYYY')).subscribe(x => {
              x.Name = user.firstName + ' ' + user.lastName;
              x.IsNothing = x.TotalHourLogged === 0;
              this.userOverView.push(x);
              count += 1;
              if (count === this.accountDomainUserList.length) {
                this.isRender = true;
                console.log(this.userOverView);
              }
          });
        });
      });
    });
  }

  onReview(userId: string): void {
    this.selectedUserId = userId;
    this.isRender = false;
    this.isRenderTimesheetDetails = true;
  }
}
