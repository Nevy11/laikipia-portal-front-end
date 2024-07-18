import { TestBed } from '@angular/core/testing';

import { Cost2yearService } from './cost2year.service';

describe('Cost2yearService', () => {
  let service: Cost2yearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cost2yearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
