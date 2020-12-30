import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDomainManagerComponent } from './account-domain-manager.component';

describe('AccountDomainManagerComponent', () => {
  let component: AccountDomainManagerComponent;
  let fixture: ComponentFixture<AccountDomainManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDomainManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDomainManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
