import { Injectable } from '@angular/core';
import { ResultSlip } from './result-slip';

@Injectable({
  providedIn: 'root',
})
export class ResultSlipService {
  Marks: ResultSlip[] = [
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
    { unitCode: 'MATH121', unitName: 'CALCULUS 1', hours: 45, Grade: 'D' },
  ];
  constructor() {}
}
