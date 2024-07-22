import { TestBed } from '@angular/core/testing';

import { DefermentService } from './deferment.service';

describe('DefermentService', () => {
  let service: DefermentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefermentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
