import { TestBed } from '@angular/core/testing';

import { AppFinanceService } from './app-finance.service';

describe('AppFinanceService', () => {
  let service: AppFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
