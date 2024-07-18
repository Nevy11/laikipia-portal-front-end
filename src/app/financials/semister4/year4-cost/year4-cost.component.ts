import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Finance } from '../../finance';
import { Year4CostService } from './year4-cost.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'hinv-year4-cost',
  templateUrl: './year4-cost.component.html',
  styleUrl: './year4-cost.component.scss',
})
export class Year4CostComponent implements OnInit {
  expenses: Finance[] = this.year4CostService.expense;
  constructor(private year4CostService: Year4CostService) {}
  @ViewChild('paid', { static: true }) paid!: ElementRef;
  @ViewChild('total', { static: true }) total!: ElementRef;
  @ViewChild('balance', { static: true }) balance!: ElementRef;
  ngOnInit(): void {
    this.paid.nativeElement.innerText = this.year4CostService.paid;
    this.balance.nativeElement.innerText = this.year4CostService.balance;
    this.total.nativeElement.innerText = this.year4CostService.Total;
  }
}
