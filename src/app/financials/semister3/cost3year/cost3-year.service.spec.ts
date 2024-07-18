import { TestBed } from '@angular/core/testing';

import { Cost3YearService } from './cost3-year.service';

describe('Cost3YearService', () => {
  let service: Cost3YearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cost3YearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
