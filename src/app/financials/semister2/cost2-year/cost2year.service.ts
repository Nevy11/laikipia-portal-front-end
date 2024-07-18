import { Injectable } from '@angular/core';
import { Finance } from '../../finance';
import { FinanceService } from '../../finance.service';

@Injectable({
  providedIn: 'root',
})
export class Cost2yearService {
  paid = this.financeService.paid;
  total = 65000;
  balance = this.paid - this.total;
  constructor(private financeService: FinanceService) {}

  expense: Finance[] = [
    {
      Expenditure: 'Journalism',
      cost: 5000,
    },
    {
      Expenditure: 'Journalism',
      cost: 500,
    },
    {
      Expenditure: 'Journalism',
      cost: 2000,
    },
    {
      Expenditure: 'Journalism',
      cost: 135000,
    },
    {
      Expenditure: 'Journalism',
      cost: 1500,
    },
    {
      Expenditure: 'Journalism',
      cost: 1500,
    },
    {
      Expenditure: 'Journalism',
      cost: 1500,
    },
    {
      Expenditure: 'Journalism',
      cost: 1500,
    },
    {
      Expenditure: 'JournalismS',
      cost: 1500,
    },
  ];
}
