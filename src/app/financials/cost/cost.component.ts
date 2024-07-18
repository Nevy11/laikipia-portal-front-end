import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FinanceService } from '../finance.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'hinv-cost',
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.scss',
})
export class CostComponent implements OnInit {
  expenses = this.financeService.expense;
  // costs = this.activateRoute.data.pipe(pluck('cost'));

  @ViewChild('paid', { static: true }) paid!: ElementRef;
  @ViewChild('balance', { static: true }) balance!: ElementRef;
  @ViewChild('total', { static: true }) total!: ElementRef;
  constructor(
    private financeService: FinanceService,
    private activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.activateRoute.data.subscribe((data) => {
    //   console.log(data);
    // });
    this.total.nativeElement.innerText = this.financeService.total;
    this.paid.nativeElement.innerText = this.financeService.total;
    this.balance.nativeElement.innerText = this.financeService.balance;
  }
}
