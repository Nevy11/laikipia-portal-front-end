import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FinanceService } from '../finance.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from './transactions';

@Component({
  selector: 'hinv-cost',
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.scss',
})
export class CostComponent implements OnInit {
  expenses = this.financeService.expense1;
  // costs = this.activateRoute.data.pipe(pluck('cost'));

  @ViewChild('paid', { static: true }) paid!: ElementRef;
  @ViewChild('balance', { static: true }) balance!: ElementRef;
  @ViewChild('total', { static: true }) total!: ElementRef;
  constructor(
    private financeService: FinanceService,
    private activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  displayedColumns: string[] = ['Expenditure', 'cost'];
  // transactions: Transaction[] = [
  //   { item: 'Beach ball', cost: 4 },
  //   { item: 'Towel', cost: 5 },
  //   { item: 'Frisbee', cost: 2 },
  //   { item: 'Sunscreen', cost: 4 },
  //   { item: 'Cooler', cost: 25 },
  //   { item: 'Swim suit', cost: 15 },
  // ];
  // Expenditure: 'Computer power',
  //     cost: 5000,

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.expenses
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}
