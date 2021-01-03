import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Activity} from '../../models/activity';

@Component({
  selector: 'app-add-or-edit-activity',
  templateUrl: './add-or-edit-activity.component.html',
  styleUrls: ['./add-or-edit-activity.component.scss']
})
export class AddOrEditActivityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddOrEditActivityComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Activity) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
