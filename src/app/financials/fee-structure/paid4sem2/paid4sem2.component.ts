import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-paid4sem2',
  templateUrl: './paid4sem2.component.html',
  styleUrl: './paid4sem2.component.scss',
})
export class Paid4sem2Component {
  paidFees = this.feeStructureService.year4Sem2paidFees;
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
