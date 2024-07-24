import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';
@Component({
  selector: 'hinv-paid-fees',
  templateUrl: './paid-fees.component.html',
  styleUrl: './paid-fees.component.scss',
})
export class PaidFeesComponent {
  paidFees = this.feeStructureService.year1Sem1paidFees;
  sem = this.feeStructureService.sem;
  admissionYear = this.feeStructureService.admissionYear;
  displayedColumns: string[] = [
    'no',
    'date',
    'ref',
    'description',
    'debit',
    'credit',
    'balance',
  ];
  dataSource = this.paidFees;
  constructor(private feeStructureService: FeeStructureService) {}
}
