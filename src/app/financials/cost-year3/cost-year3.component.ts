import { Component } from '@angular/core';
import { Transaction } from '../cost/transactions';

@Component({
  selector: 'hinv-cost-year3',
  templateUrl: './cost-year3.component.html',
  styleUrl: './cost-year3.component.scss',
})
export class CostYear3Component {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}
