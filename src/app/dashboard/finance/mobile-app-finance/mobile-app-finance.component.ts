import { Component, Input, inject } from '@angular/core';
import { AppFinanceMpesaComponent } from '../app-finance-mpesa/app-finance-mpesa.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'hinv-mobile-app-finance',
  templateUrl: './mobile-app-finance.component.html',
  styleUrl: './mobile-app-finance.component.scss',
})
export class MobileAppFinanceComponent {
  @Input() FeeBalance!: number;
  dialog = inject(MatDialog);

  payNow() {
    this.dialog.open(AppFinanceMpesaComponent);
  }
}
