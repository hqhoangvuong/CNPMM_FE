import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPersonDialogComponent } from './add-new-person-dialog.component';

describe('AddNewPersonDialogComponent', () => {
  let component: AddNewPersonDialogComponent;
  let fixture: ComponentFixture<AddNewPersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPersonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
