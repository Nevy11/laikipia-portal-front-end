import { Injectable } from '@angular/core';
import { allUnits } from '../units';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  curriculum: allUnits[] = [
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
    {
      unitCode: 'COMP112',
      unitName: 'Fundamentals of Computing',
      option: 'CORE',
    },
  ];
  constructor() {}
}
