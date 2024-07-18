import { Injectable } from '@angular/core';
import { Finance } from './finance';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  year = 4;
  paid = 95000;
  total = 10500;
  balance = this.paid - this.total;
  constructor() {}
  expense: Finance[] = [
    {
      Expenditure: 'Computer power',
      cost: 5000,
    },
    {
      Expenditure: 'Computer Destructions',
      cost: 500,
    },
    {
      Expenditure: 'Labaratory services',
      cost: 2000,
    },
    {
      Expenditure: 'Academic services',
      cost: 135000,
    },
    {
      Expenditure: 'network services',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
  ];
}
