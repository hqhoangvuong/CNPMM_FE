import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  avatarImage: any;
  isImageLoading = false;
  currentJobTitle = '';
  isDetailSelected = true;
  isJobSelected = false;
  isPjInfoSelected = false;

  constructor(private token: TokenStorageService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserDetails().subscribe(userDetail => {
        this.currentUser = userDetail;
        userDetail[0].jobs.forEach((element) => {
          if (element.isActive === true) {
            this.currentJobTitle = element.jobTitle;
          }
        });
    });

    this.getImageFromService();
  }

  createImageFromBlob(image: Blob): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.avatarImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService(): void {
    this.isImageLoading = true;
    this.userService.getCurrentUserAvatar().subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  selectDetail(): void {
    this.isDetailSelected = true;
    this.isJobSelected = false;
    this.isPjInfoSelected = false;
  }

  selectJob(): void {
    this.isDetailSelected = false;
    this.isJobSelected = true;
    this.isPjInfoSelected = false;
  }

  selectPjInfo(): void {
    this.isDetailSelected = false;
    this.isJobSelected = false;
    this.isPjInfoSelected = true;
  }
}
