import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';
import { balance } from '../fee-structure';

@Component({
  selector: 'hinv-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss',
})
export class TotalComponent {
  balance: balance[] = [
    {
      credit: 212,
      debit: 3234,
      balance: 3423,
    },
  ];

  displayedColumns: string[] = ['debit', 'credit', 'balance'];
  dataSource = this.balance;
  constructor(private feeStructureService: FeeStructureService) {}
}
