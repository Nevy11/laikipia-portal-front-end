import { Injectable } from '@angular/core';
import { Units } from './units';
import { FinanceService } from '../../financials/finance.service';
import { FeeStructureService } from '../../financials/fee-structure/fee-structure.service';
import { DashboardService } from '../../dashboard/dashboard.service';
import { AcademicService } from '../academic.service';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  year = this.dashService.year;
  sem = this.dashService.sem;
  admissionYear = this.dashService.admissionYear;
  constructor(
    private dashService: DashboardService,
    private academicService: AcademicService
  ) {}

  units: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];

  units1Sem2: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
  units2Sem1: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
  units3Sem1: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
  units2sem2: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
  units3sem2: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
  units4sem1: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
  units4sem2: Units[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
      Option: 'CORE',
      Status: 'Approved',
    },
  ];
}
