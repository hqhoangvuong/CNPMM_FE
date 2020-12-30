import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() UserBasicInfo: User;
  FullName: string;
  constructor() { }

  ngOnInit(): void {
    this.FullName = this.UserBasicInfo.firstName + ' ' + this.UserBasicInfo.middleName + ' ' + this.UserBasicInfo.lastName;
  }
}
