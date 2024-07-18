import { TestBed } from '@angular/core/testing';

import { Year4CostService } from './year4-cost.service';

describe('Year4CostService', () => {
  let service: Year4CostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Year4CostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
