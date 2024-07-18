import { Component, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-year2-fees',
  templateUrl: './year2-fees.component.html',
  styleUrl: './year2-fees.component.scss',
})
export class Year2FeesComponent {
  feeStructureService = inject(FeeStructureService);
  sem = this.feeStructureService.sem;
  year = this.feeStructureService.year;
  admissionYear = this.feeStructureService.admissionYear;
}
