import {Component, OnInit, Output} from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './_services/user.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  avatarImage: any;
  isImageLoading = false;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.userService.getCurrentUserBasicInfo()
        .subscribe((res) => {
          const obj = JSON.parse(res);
          this.username = obj.name;
        });
      this.getImageFromService();
    }
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
    console.log(typeof(this.avatarImage));
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
