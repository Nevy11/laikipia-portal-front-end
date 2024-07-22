import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'hinv-app-finance-mpesa',
  templateUrl: './app-finance-mpesa.component.html',
  styleUrl: './app-finance-mpesa.component.scss',
})
export class AppFinanceMpesaComponent {
  balance: number = 0;
  // auth = this.appFinanceService.getAuthentication();
  checkBalance() {
    this.balance = 5000;
  }
  mpesaOk() {
    this.balance += 200;
  }
  constructor(private http: HttpClient) {}
}
