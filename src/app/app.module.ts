import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryDetailsComponent } from './directory/directory-details/directory-details.component';
import { DetailsComponent } from './profile/details/details.component';
import { JobComponent } from './profile/job.component';
import { ProjectInfoComponent } from './profile/project-info.component';
import { DatePipe } from '@angular/common';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { WeeklyReportComponent } from './timesheet/weekly-report.component'
import { TimesheetTaskComponent } from './timesheet/timesheet-task.component';
import { TimesheetWeeklyHeaderComponent } from './timesheet/timesheet-weekly-header.component';
import { TimesheetFooterComponent } from './timesheet/timesheet-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DirectoryComponent,
    DirectoryDetailsComponent,
    DetailsComponent,
    JobComponent,
    ProjectInfoComponent,
    TimesheetComponent,
    WeeklyReportComponent,
    TimesheetTaskComponent,
    TimesheetWeeklyHeaderComponent,
    TimesheetFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    [ FormsModule, ReactiveFormsModule ],
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
