import { TestBed } from '@angular/core/testing';

import { ExamCardServiceService } from './exam-card-service.service';

describe('ExamCardServiceService', () => {
  let service: ExamCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
