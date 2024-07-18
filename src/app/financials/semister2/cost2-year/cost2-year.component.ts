import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Finance } from '../../finance';
import { Cost2yearService } from './cost2year.service';

@Component({
  selector: 'hinv-cost2-year',
  templateUrl: './cost2-year.component.html',
  styleUrl: './cost2-year.component.scss',
})
export class Cost2YearComponent implements OnInit {
  expenses = this.cost2YearService.expense;
  @ViewChild('total', { static: true }) total!: ElementRef;
  @ViewChild('paid', { static: true }) paid!: ElementRef;
  @ViewChild('balance', { static: true }) balance!: ElementRef;

  constructor(private cost2YearService: Cost2yearService) {}
  ngOnInit(): void {
    this.total.nativeElement.innerText = this.cost2YearService.total;
    this.paid.nativeElement.innerText = this.cost2YearService.paid;
    this.balance.nativeElement.innerText = this.cost2YearService.balance;
  }
}
