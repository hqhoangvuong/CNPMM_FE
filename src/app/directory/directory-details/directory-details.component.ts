import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../_services/directory.service';

export interface PeriodicElement {
  name: string;
  IDmember: number;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {IDmember: 1, name: 'Hydrogen', weight: 1.0079},


];
@Component({
  selector: 'app-directory-details',
  templateUrl: './directory-details.component.html',
  styleUrls: ['./directory-details.component.scss']
})
export class DirectoryDetailsComponent implements OnInit {
  directories: any;
  displayedColumns: string[] = ['idmember', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor(private directoryService: DirectoryService) { }

  ngOnInit(): void {
    this.directoryService.getDirectory().subscribe(directory => {
      this.directories = directory;
      console.log(this.directories);
      });
  }

}
