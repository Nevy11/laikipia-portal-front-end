import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicService } from '../academic.service';

@Component({
  selector: 'hinv-result-slip',
  templateUrl: './result-slip.component.html',
  styleUrl: './result-slip.component.scss',
})
export class ResultSlipComponent {
  currentYear = this.academicService.currentYear;
  year: string = '';
  sem: string = '';
  constructor(
    private router: Router,
    private academicService: AcademicService
  ) {}
  Generate() {
    if (this.year === '1') {
      this.router.navigate(['academic', 'slip']);
    }
    if (this.year === '2') {
      this.router.navigate(['academic', 'slip2']);
    }
    if (this.year === '3') {
      this.router.navigate(['academic', 'slip3']);
    }
    if (this.year === '4') {
      this.router.navigate(['academic', 'slip4']);
    }
  }
}
