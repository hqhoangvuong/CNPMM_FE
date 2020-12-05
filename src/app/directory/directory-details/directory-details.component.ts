import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../_services/directory.service';

export interface PeriodicElement {
  fullName: string;
  employeeId: string;
  jobTitle: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { fullName: 'Bùi Thị Hồng Nhung', employeeId: '1', jobTitle: 'internship'},


];
@Component({
  selector: 'app-directory-details',
  templateUrl: './directory-details.component.html',
  styleUrls: ['./directory-details.component.scss']
})
export class DirectoryDetailsComponent implements OnInit {
  directories: any;
  displayedColumns: string[] = ['employeeId', 'fullName', 'jobTitle'];
  dataSource = ELEMENT_DATA;
  constructor(private directoryService: DirectoryService) { }

  ngOnInit(): void {
    this.directoryService.getDirectory().subscribe(directory => {
      this.directories = directory;
      console.log(this.directories);
      });
  }

}
