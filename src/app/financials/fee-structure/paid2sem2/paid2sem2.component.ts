import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-paid2sem2',
  templateUrl: './paid2sem2.component.html',
  styleUrl: './paid2sem2.component.scss',
})
export class Paid2sem2Component {
  paidFees = this.feeStructureService.year2Sem2paidFees;
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
  admissionYear = this.feeStructureService.admissionYear + 1;
  constructor(private feeStructureService: FeeStructureService) {}
}
