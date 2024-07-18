import { Component } from '@angular/core';

@Component({
  selector: 'hinv-semister2',
  templateUrl: './semister2.component.html',
  styleUrl: './semister2.component.scss',
})
export class Semister2Component {
  hideCosts = true;
  btn!: number;
  showExpense(id: number) {
    this.hideCosts = !this.hideCosts;
    this.btn = id;
  }
}
