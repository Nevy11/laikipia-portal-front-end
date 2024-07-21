import { Injectable } from '@angular/core';
import { ExamCardTable } from './exam-card-table';

@Injectable({
  providedIn: 'root',
})
export class ExamCardServiceService {
  units: ExamCardTable[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
  ];
  currentExamCard: ExamCardTable[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
  ];
  constructor() {}
}
