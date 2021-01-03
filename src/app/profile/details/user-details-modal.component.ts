import {Component, Inject, Input, OnInit} from '@angular/core';
import {Job} from '../../models/job';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HrManagementComponent} from '../../account-domain-manager/hr-management/hr-management.component';
import {UserRequest} from '../../models/user-request';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss']
})
export class UserDetailsModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<HrManagementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Job) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
