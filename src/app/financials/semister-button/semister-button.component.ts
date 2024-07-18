import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-semister-button',
  templateUrl: './semister-button.component.html',
  styleUrl: './semister-button.component.scss',
})
export class SemisterButtonComponent {
  hideCosts: boolean = true;
  semister: boolean = true;
  btn: number = 1;
  showExpenses(year: number) {
    this.hideCosts = !this.hideCosts;
    this.btn = 1;
  }
}
