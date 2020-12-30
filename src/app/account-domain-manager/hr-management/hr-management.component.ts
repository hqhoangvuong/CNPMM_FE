import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service';
import {User} from '../../models/user';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material/icon';

@Component({
  selector: 'app-hr-management',
  templateUrl: './hr-management.component.html',
  styleUrls: ['./hr-management.component.scss']
})
export class HrManagementComponent implements OnInit {
  currentUserAccDomain: any;
  displayedColumns: string[];
  accountDomainUserList: any;
  isDisplayDetail: boolean;
  selectedUser: User;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.displayedColumns = ['id', 'employeecode', 'name', 'email', 'resource', 'jobtitle', 'action'];
    this.isDisplayDetail = false;
    this.userService.getCurrentUserAccountDomain().subscribe(accDomain => {
      this.currentUserAccDomain = accDomain;
      this.userService.getAllUserOfAccountDomain(this.currentUserAccDomain.id).subscribe(data => {
        this.accountDomainUserList = data;
        this.accountDomainUserList.forEach(user => {
          user.jobs.filter(job => job.isActive === false);
          });
        });
      });
  }

  deleteUsers(userId: string): void {

  }

  updateUser(userId: string): void {
    this.userService.getUserById(userId).subscribe(x => {
      this.selectedUser = x;
      console.log(x);
      this.isDisplayDetail = true;
    });
  }
}
