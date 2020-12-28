import { TestBed } from '@angular/core/testing';

import { AccountDomainService } from './account-domain.service';

describe('AccountDomainService', () => {
  let service: AccountDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
