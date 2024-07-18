import { Component, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-year4-fees',
  templateUrl: './year4-fees.component.html',
  styleUrl: './year4-fees.component.scss',
})
export class Year4FeesComponent {
  feeStructureService = inject(FeeStructureService);
  sem = this.feeStructureService.sem;
  year = this.feeStructureService.year;
  admissionYear = this.feeStructureService.admissionYear;
}
