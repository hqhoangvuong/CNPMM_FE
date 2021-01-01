import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HrManagementComponent} from './hr-management.component';
import {UserRequest} from '../../models/user-request';

@Component({
  selector: 'app-add-new-person-dialog',
  templateUrl: './add-new-person-dialog.component.html',
  styleUrls: ['./add-new-person-dialog.component.scss']
})
export class AddNewPersonDialogComponent implements OnInit {
  repeatPassword: string;
  constructor(public dialogRef: MatDialogRef<HrManagementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserRequest) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
