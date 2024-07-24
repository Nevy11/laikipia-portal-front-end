import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-paid2sem1',
  templateUrl: './paid2sem1.component.html',
  styleUrl: './paid2sem1.component.scss',
})
export class Paid2sem1Component {
  paidFees = this.feeStructureService.year2Sem1paidFees;
  sem = this.feeStructureService.year;
  admissionYear = this.feeStructureService.admissionYear + 1;
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
