import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'hinv-app-finance-mpesa',
  templateUrl: './app-finance-mpesa.component.html',
  styleUrl: './app-finance-mpesa.component.scss',
})
export class AppFinanceMpesaComponent {
  balance: number = this.dashService.feeBalance;
  // auth = this.appFinanceService.getAuthentication();
  checkBalance() {
    this.balance = 5000;
  }
  mpesaOk() {
    this.balance += 200;
  }
  constructor(
    private http: HttpClient,
    private dashService: DashboardService
  ) {}
}
