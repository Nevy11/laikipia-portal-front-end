import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { FinanceService } from './finance.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'hinv-financials',
  templateUrl: './financials.component.html',
  styleUrl: './financials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialsComponent implements OnInit {
  hideCosts!: boolean;
  semister: boolean = false;
  year: number = this.financeService.year;
  breakPointObserver = inject(BreakpointObserver);
  feeBalance: number = 15000;
  accountBalance: number = 16000;
  defict: number = this.accountBalance - this.feeBalance;
  constructor(
    private vcr: ViewContainerRef,
    private financeService: FinanceService
  ) {}
  ngOnInit(): void {}
  showExpenses() {
    this.hideCosts = !this.hideCosts;
  }
  showSemister() {
    this.semister = !this.semister;
  }
}
