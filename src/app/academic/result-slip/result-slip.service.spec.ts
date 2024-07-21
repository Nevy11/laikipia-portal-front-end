import { TestBed } from '@angular/core/testing';

import { ResultSlipService } from './result-slip.service';

describe('ResultSlipService', () => {
  let service: ResultSlipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultSlipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
