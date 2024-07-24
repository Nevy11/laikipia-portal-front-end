import { Component, inject } from '@angular/core';
import { Transaction } from '../cost/transactions';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'hinv-cost-year2',
  templateUrl: './cost-year2.component.html',
  styleUrl: './cost-year2.component.scss',
})
export class CostYear2Component {
  displayedColumns: string[] = ['Expenditure', 'cost'];

  financeService = inject(FinanceService);
  expenses = this.financeService.expense2;
  /** Gets the total cost of all Fees. */
  getTotalCost() {
    return this.expenses
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}
