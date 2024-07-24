import { Component } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';
import { balance } from '../fee-structure';
import { DashboardService } from '../../../dashboard/dashboard.service';

@Component({
  selector: 'hinv-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss',
})
export class TotalComponent {
  balance: balance[] = [
    {
      credit: this.dashService.paidFees,
      debit: this.dashService.totalFees,
      balance: this.dashService.feeBalance,
    },
  ];

  displayedColumns: string[] = ['debit', 'credit', 'balance'];
  dataSource = this.balance;
  constructor(private dashService: DashboardService) {}
}
