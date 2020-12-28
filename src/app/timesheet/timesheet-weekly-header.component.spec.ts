import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWeeklyHeaderComponent } from './timesheet-weekly-header.component';

describe('TimesheetWeeklyHeaderComponent', () => {
  let component: TimesheetWeeklyHeaderComponent;
  let fixture: ComponentFixture<TimesheetWeeklyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetWeeklyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetWeeklyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
