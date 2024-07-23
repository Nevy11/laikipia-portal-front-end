import { Injectable } from '@angular/core';
import { ResultSlip } from './result-slip/result-slip';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class AcademicService {
  currentYear = this.dashService.year;
  currentSem = this.dashService.sem;
  admissionYear = this.dashService.admissionYear;
  Marks: ResultSlip[] = [
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
  ];
  constructor(private dashService: DashboardService) {}
}
