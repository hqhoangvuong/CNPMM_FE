import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-domain-manager',
  templateUrl: './account-domain-manager.component.html',
  styleUrls: ['./account-domain-manager.component.scss']
})
export class AccountDomainManagerComponent implements OnInit {
  isHrManSelected: boolean;
  isTimesheetManSelected: boolean;
  isActivityManSelected: boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.isHrManSelected = false;
    this.isTimesheetManSelected = true;
    this.isActivityManSelected = false;
  }

  changeCategory(categoryId: number): void {
    switch (categoryId) {
      case 0: {
        this.isTimesheetManSelected = true;
        this.isHrManSelected = false;
        this.isActivityManSelected = false;
        break;
      }
      case 1: {
        this.isTimesheetManSelected = false;
        this.isHrManSelected = true;
        this.isActivityManSelected = false;
        break;
      }
      case 2: {
        this.isTimesheetManSelected = false;
        this.isHrManSelected = false;
        this.isActivityManSelected = true;
        break;
      }
    }
  }

}
