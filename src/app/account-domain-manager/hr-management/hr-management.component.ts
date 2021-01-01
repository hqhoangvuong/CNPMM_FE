import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service';
import {User} from '../../models/user';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {AddNewPersonDialogComponent} from './add-new-person-dialog.component';
import {UserRequest} from '../../models/user-request';
import {AuthService} from '../../_services/auth.service';
import {Job} from '../../models/job';

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

  constructor(private userService: UserService,
              public dialog: MatDialog,
              public authService: AuthService) {
  }

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

  onCreateUser(): void {
    const newUser: UserRequest = new UserRequest();
    const dialogRef = this.dialog.open(AddNewPersonDialogComponent, {
      width: '400px',
      data: newUser
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.authService.create(result, this.currentUserAccDomain.id).subscribe(x => this.ngOnInit());
    });
  }
}
