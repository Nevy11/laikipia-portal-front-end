import { Injectable } from '@angular/core';
import { Units } from './units';
import { FinanceService } from '../../financials/finance.service';
import { FeeStructureService } from '../../financials/fee-structure/fee-structure.service';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  year = this.financeService.year;
  sem = this.financeService.sem;
  admissionYear = this.feeStructureService.admissionYear;
  constructor(
    private financeService: FinanceService,
    private feeStructureService: FeeStructureService
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
}
