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
  Marks2: ResultSlip[] = [
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
    {
      unitCode: 'comp123',
      unitName: 'COMPUTER ARCHITECTURE',
      hours: 30,
      Grade: 'A',
    },
  ];
  Marks3: ResultSlip[] = [
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'A',
    },
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'C',
    },
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'C',
    },
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'C',
    },
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'C',
    },
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'C',
    },
    {
      unitCode: 'Sad223',
      unitName: 'SYSTEM ANALYSIS AND DESIGN',
      hours: 40,
      Grade: 'C',
    },
  ];
  marks4: ResultSlip[] = [
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
    { unitCode: 'Python443', unitName: 'PYTHON', hours: 30, Grade: 'B' },
  ];
  constructor(private dashService: DashboardService) {}
}
