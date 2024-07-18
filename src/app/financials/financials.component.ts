import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SemisterButtonComponent } from './semister-button/semister-button.component';
import { Semister2Component } from './semister2/semister2.component';
import { Semister3Component } from './semister3/semister3.component';
import { Semister4Component } from './semister4/semister4.component';
import { FinanceService } from './finance.service';

@Component({
  selector: 'hinv-financials',
  templateUrl: './financials.component.html',
  styleUrl: './financials.component.scss',
})
export class FinancialsComponent implements OnInit {
  hideCosts: boolean = true;
  semister: boolean = true;
  year = this.financeService.year;
  @ContentChild('btn') btn!: SemisterButtonComponent;
  @ViewChild('myButton', { static: true }) myButton!: ElementRef;
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
