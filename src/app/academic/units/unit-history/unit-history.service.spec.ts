import { TestBed } from '@angular/core/testing';

import { UnitHistoryService } from './unit-history.service';

describe('UnitHistoryService', () => {
  let service: UnitHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
