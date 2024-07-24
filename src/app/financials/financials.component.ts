import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { FinanceService } from './finance.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'hinv-financials',
  templateUrl: './financials.component.html',
  styleUrl: './financials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialsComponent implements OnInit {
  hideCosts!: boolean;
  semister: boolean = false;
  year: number = this.dashService.year;
  breakPointObserver = inject(BreakpointObserver);
  feeBalance: number = this.dashService.feeBalance;
  accountBalance: number = 16000;
  totalFees: number = this.dashService.totalFees;
  paidFees: number = this.dashService.paidFees;
  defict: number = this.accountBalance - this.feeBalance;
  constructor(
    private vcr: ViewContainerRef,
    private financeService: FinanceService,
    private dashService: DashboardService
  ) {}
  ngOnInit(): void {}
  showExpenses() {
    this.hideCosts = !this.hideCosts;
  }
  showSemister() {
    this.semister = !this.semister;
  }
}
