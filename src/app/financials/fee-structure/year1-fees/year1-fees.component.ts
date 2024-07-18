import { Component, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-year1-fees',
  templateUrl: './year1-fees.component.html',
  styleUrl: './year1-fees.component.scss',
})
export class Year1FeesComponent {
  feeStructureService = inject(FeeStructureService);
  sem = this.feeStructureService.sem;
  year = this.feeStructureService.year;
  admissionYear = this.feeStructureService.admissionYear;
}
