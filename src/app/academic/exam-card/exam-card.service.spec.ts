import { TestBed } from '@angular/core/testing';

import { ExamCardService } from './exam-card.service';

describe('ExamCardService', () => {
  let service: ExamCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
