import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppFinanceMpesaComponent } from './app-finance-mpesa/app-finance-mpesa.component';
import { AppNavComponent } from '../../app-nav/app-nav.component';
import { HostelsComponent } from '../hostels/hostels.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FinanceService } from './finance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() FeeBalance!: number;
  panelOpenState = signal(false);
  dialog = inject(MatDialog);
  BreakPointObserver = inject(BreakpointObserver);
  name = 'Stephen Mainda';
  ngOnInit(): void {
    // console.log(this.BreakPointObserver);
    // console.log(this.financeService.joke$);
  }
  // joke$ = this.financeService.joke$.subscribe((data) => {
  //   console.log(data);
  // });
  openDialog() {
    this.dialog.open(AppFinanceMpesaComponent);
  }
  goToFeeStatement() {
    this.router.navigate(['finance', 'feeStructure']);
  }
}
