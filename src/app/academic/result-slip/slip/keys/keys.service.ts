import { Injectable } from '@angular/core';
import { KeyGrading } from './key-grading-system/key-grading';

@Injectable({
  providedIn: 'root',
})
export class KeysService {
  keyGrading: KeyGrading[] = [
    {
      grade: '70-100',
      points: 'A',
    },
    {
      grade: '60-69.99',
      points: 'B',
    },
    {
      grade: '50-59.99',
      points: 'C',
    },
    {
      grade: '40-49.99',
      points: 'D',
    },
    {
      grade: '0-39.99',
      points: 'F',
    },
  ];
  constructor() {}
}
