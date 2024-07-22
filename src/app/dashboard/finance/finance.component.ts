import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppFinanceMpesaComponent } from './app-finance-mpesa/app-finance-mpesa.component';

@Component({
  selector: 'hinv-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
})
export class FinanceComponent {
  constructor(private router: Router) {}
  @Input() FeeBalance!: number;
  panelOpenState = signal(false);
  dialog = inject(MatDialog);
  BreakPointObserver = inject(BreakpointObserver);
  name = 'Stephen Mainda';

  openDialog() {
    this.dialog.open(AppFinanceMpesaComponent);
  }
  goToFeeStatement() {
    this.router.navigate(['finance', 'feeStructure']);
  }
}
