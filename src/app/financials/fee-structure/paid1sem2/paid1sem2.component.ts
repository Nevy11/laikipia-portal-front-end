import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-paid1sem2',
  templateUrl: './paid1sem2.component.html',
  styleUrl: './paid1sem2.component.scss',
})
export class Paid1sem2Component {
  paidFees = this.feeStructureService.year1Sem2paidFees;
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
