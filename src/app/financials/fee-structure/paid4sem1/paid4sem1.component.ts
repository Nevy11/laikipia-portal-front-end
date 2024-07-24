import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-paid4sem1',
  templateUrl: './paid4sem1.component.html',
  styleUrl: './paid4sem1.component.scss',
})
export class Paid4sem1Component {
  paidFees = this.feeStructureService.year4Sem1paidFees;
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
  admissionYear = this.feeStructureService.admissionYear + 3;
  constructor(private feeStructureService: FeeStructureService) {}
}
