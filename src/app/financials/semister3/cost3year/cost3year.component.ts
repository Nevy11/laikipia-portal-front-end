import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Finance } from '../../finance';
import { Semister3Service } from '../semister3.service';
import { Cost3YearService } from './cost3-year.service';

@Component({
  selector: 'hinv-cost3year',
  templateUrl: './cost3year.component.html',
  styleUrl: './cost3year.component.scss',
})
export class Cost3yearComponent implements OnInit {
  expenses: Finance[] = this.cost3YearService.expense;
  @ViewChild('paid', { static: true }) paid!: ElementRef;
  @ViewChild('total', { static: true }) total!: ElementRef;
  @ViewChild('balance', { static: true }) balance!: ElementRef;
  constructor(private cost3YearService: Cost3YearService) {}
  ngOnInit(): void {
    this.paid.nativeElement.innerText = this.cost3YearService.paid;
    this.balance.nativeElement.innerText = this.cost3YearService.balance;
    this.total.nativeElement.innerText = this.cost3YearService.Total;
  }
}
