import { TestBed } from '@angular/core/testing';

import { SchoolTimetableService } from './school-timetable.service';

describe('SchoolTimetableService', () => {
  let service: SchoolTimetableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolTimetableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
