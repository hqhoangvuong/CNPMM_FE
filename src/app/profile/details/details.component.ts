import {Component, Input, OnInit, Output} from '@angular/core';
import { User } from '../../models/user';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() UserBasicInfo: User;
  @Output() UserBasicInfoChange: EventEmitter<User> = new EventEmitter<User>();
  @Output() saveChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() isEditingMode;
  FullName: string;
  constructor() { }

  ngOnInit(): void {
    this.FullName = this.UserBasicInfo.firstName + ' ' + this.UserBasicInfo.middleName + ' ' + this.UserBasicInfo.lastName;
  }

  onSaveChange(): void {
    this.UserBasicInfoChange.emit(this.UserBasicInfo);
  }

  onSaveButtonClicked(): void {
    this.onSaveChange();
    this.saveChange.emit('details saved');
  }
}
