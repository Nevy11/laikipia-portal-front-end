import { Injectable } from '@angular/core';
import { Finance } from '../../finance';
import { FinanceService } from '../../finance.service';

@Injectable({
  providedIn: 'root',
})
export class Cost3YearService {
  paid = this.financeService.paid;
  Total = 6000;
  balance = this.paid - this.Total;
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
