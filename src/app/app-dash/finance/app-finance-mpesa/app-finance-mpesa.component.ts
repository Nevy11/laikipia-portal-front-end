import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { filter, map, mergeMap, shareReplay, switchMap } from 'rxjs';
import { AppFinanceService } from './app-finance.service';

@Component({
  selector: 'hinv-app-finance-mpesa',
  templateUrl: './app-finance-mpesa.component.html',
  styleUrl: './app-finance-mpesa.component.scss',
})
export class AppFinanceMpesaComponent implements OnInit {
  balance: number = 0;
  checkBalance() {
    this.balance = 5000;
  }
  mpesaOk() {
    this.balance += 200;
  }
  constructor(private appFinanceService: AppFinanceService) {}
  ngOnInit(): void {}
}
