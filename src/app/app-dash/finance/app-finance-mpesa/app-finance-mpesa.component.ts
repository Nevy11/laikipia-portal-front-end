import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { filter, map, mergeMap, shareReplay, switchMap } from 'rxjs';
import { AppFinanceService } from './app-finance.service';
import { HttpClient } from '@angular/common/http';
import { Rooms } from './rooms';

@Component({
  selector: 'hinv-app-finance-mpesa',
  templateUrl: './app-finance-mpesa.component.html',
  styleUrl: './app-finance-mpesa.component.scss',
})
export class AppFinanceMpesaComponent implements OnInit {
  balance: number = 0;
  // auth = this.appFinanceService.getAuthentication();
  checkBalance() {
    this.balance = 5000;
  }
  mpesaOk() {
    this.balance += 200;
  }
  constructor(
    private appFinanceService: AppFinanceService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    // this.auth.subscribe((data) => console.log(data));
  }
  learn$ = this.http.get<any>('http://localhost:3000/').subscribe((resp) => {
    console.log(resp);
  });
}
