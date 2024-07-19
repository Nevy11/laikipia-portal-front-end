import { Injectable } from '@angular/core';
import { Finance } from './finance';
import { AppRepositoryService } from '../app-repository/app-repository.service';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  year = this.appRepositoryService.year;
  sem = this.appRepositoryService.sem;
  paid = 95000;
  total = 10500;
  balance = this.paid - this.total;
  constructor(private appRepositoryService: AppRepositoryService) {}
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
