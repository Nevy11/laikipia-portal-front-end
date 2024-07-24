import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-paid3sem1',
  templateUrl: './paid3sem1.component.html',
  styleUrl: './paid3sem1.component.scss',
})
export class Paid3sem1Component {
  paidFees = this.feeStructureService.year3Sem1paidFees;
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
  sem = this.feeStructureService.sem;
  admissionYear = this.feeStructureService.admissionYear + 2;
  constructor(private feeStructureService: FeeStructureService) {}
}
