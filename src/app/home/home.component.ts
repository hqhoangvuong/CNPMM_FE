import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  weekStart: any;
  weekEnd: any;
  constructor(private token: TokenStorageService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserDetails().subscribe(userDetail => {
      this.currentUser = userDetail;
    });
    this.getWeek();
  }

  getWeek(): void {
    const current = new Date();
    const startDay = current.getDate() - current.getDay() + 1;
    this.weekStart = new Date(current.setDate(startDay));
    this.weekEnd = new Date(current.setDate(startDay + 6));
  }
}
