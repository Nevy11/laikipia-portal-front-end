import { TestBed } from '@angular/core/testing';

import { Semister3Service } from './semister3.service';

describe('Semister3Service', () => {
  let service: Semister3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Semister3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
