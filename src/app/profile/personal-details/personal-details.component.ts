import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() UserBasicInfo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
