import { Component, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-year3-fees',
  templateUrl: './year3-fees.component.html',
  styleUrl: './year3-fees.component.scss',
})
export class Year3FeesComponent {
  feeStructureService = inject(FeeStructureService);
  sem = this.feeStructureService.sem;
  year = this.feeStructureService.year;
  admissionYear = this.feeStructureService.admissionYear;
}
