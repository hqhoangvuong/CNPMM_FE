import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditActivityComponent } from './add-or-edit-activity.component';

describe('AddOrEditActivityComponent', () => {
  let component: AddOrEditActivityComponent;
  let fixture: ComponentFixture<AddOrEditActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
