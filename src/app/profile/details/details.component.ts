import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() UserBasicInfo: any;
  FullName: string;
  constructor() { }

  ngOnInit(): void {
    this.FullName = this.UserBasicInfo.firstName + ' ' + this.UserBasicInfo.middleName + ' ' + this.UserBasicInfo.lastName;
  }
}
