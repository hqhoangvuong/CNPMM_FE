import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetFooterComponent } from './timesheet-footer.component';

describe('TimesheetFooterComponent', () => {
  let component: TimesheetFooterComponent;
  let fixture: ComponentFixture<TimesheetFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
