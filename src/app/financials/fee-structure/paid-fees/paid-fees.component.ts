import { Component } from '@angular/core';
import { PeriodicElement } from '../fee-structure';
import { FeeStructureService } from '../fee-structure.service';
@Component({
  selector: 'hinv-paid-fees',
  templateUrl: './paid-fees.component.html',
  styleUrl: './paid-fees.component.scss',
})
export class PaidFeesComponent {
  ELEMENT_DATA: PeriodicElement[] = this.feeStructureService.ELEMENT_DATA;

  displayedColumns: string[] = [
    'no',
    'date',
    'ref',
    'description',
    'debit',
    'credit',
    'balance',
  ];
  dataSource = this.ELEMENT_DATA;
  constructor(private feeStructureService: FeeStructureService) {}
}
