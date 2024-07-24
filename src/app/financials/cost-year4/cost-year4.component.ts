import { Component, inject } from '@angular/core';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'hinv-cost-year4',
  templateUrl: './cost-year4.component.html',
  styleUrl: './cost-year4.component.scss',
})
export class CostYear4Component {
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
