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
    alert('A message has been sent to your phone on the balance of your fees');
  }
  mpesaOk() {
    alert('Please enter your password to the prompt');
  }
  constructor(
    private http: HttpClient,
    private dashService: DashboardService
  ) {}
}
