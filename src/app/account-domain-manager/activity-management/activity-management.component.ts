import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity';
import {UserService} from '../../_services/user.service';
import {ActivityService} from '../../_services/activity.service';
import {MatDialog} from '@angular/material/dialog';
import {AddOrEditActivityComponent} from './add-or-edit-activity.component';


@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.scss']
})
export class ActivityManagementComponent implements OnInit {

  accountDomainActivity: Array<Activity>;
  currentUserAccDomain: any;
  TableField = ['id', 'accdomainid', 'description', 'action'];
  constructor(private userService: UserService,
              private activityService: ActivityService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getCurrentUserAccountDomain().subscribe(accDomain => {
      this.currentUserAccDomain = accDomain;
      this.activityService.getActivityByAccDomainId(this.currentUserAccDomain.id).subscribe( x => {
        this.accountDomainActivity = x;
      });
    });
  }

  openDialog(activity: Activity, action: string): void {
    const dialogRef = this.dialog.open(AddOrEditActivityComponent, {
      width: '300px',
      data: activity
    });

    dialogRef.afterClosed().subscribe(result => {
      if (action === 'edit') {
        this.activityService.updateActivity(activity).subscribe(x => this.ngOnInit());
      }

      if (action === 'create') {
        this.activityService.createActivity(activity).subscribe(x => this.ngOnInit());
      }
    });
  }

  onEdit(activityId: string): void {
    const activityEdit = this.accountDomainActivity.find(x => x.id === activityId);
    this.openDialog(activityEdit, 'edit');
  }

  onCreate(): void {
    const ac = new Activity();
    ac.accountDomainId = this.currentUserAccDomain.id;
    this.openDialog(ac, 'create');
  }

  onDelete(activityId: string): void {
    const activityDelete = this.accountDomainActivity.find(x => x.id === activityId);
    console.log(activityDelete);
    this.activityService.deleteActivity(activityDelete).subscribe(x => this.ngOnInit());
  }
}
