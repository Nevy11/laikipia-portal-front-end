import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-result-slip',
  templateUrl: './result-slip.component.html',
  styleUrl: './result-slip.component.scss',
})
export class ResultSlipComponent {
  currentYear = 1;
  year: string = '';
  sem: string = '';
  constructor(private router: Router) {}
  Generate() {
    if (this.year === '1') {
      this.router.navigate(['academic', 'slip']);
    }
  }
}
