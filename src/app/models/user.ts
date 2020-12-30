import {Job} from './job';
import {Project} from './project';

export class User {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  middleName: string;
  name: string;
  gender: string;
  sex: string;
  employeeCode: string;
  phoneNumber: string;
  vietnameseName: string;
  ethnicRace: string;
  idCardNo: string;
  nationality: string;
  maritalStatus: string;
  birthplaceCity: string;
  issuedDate: string;
  issuedPlace: string;
  isTeamLead: boolean;
  teams: Array<any>;
  projects: Array<Project>;
  jobs: Array<Job>;
  roles: any;
  isDeleted: boolean;
}
