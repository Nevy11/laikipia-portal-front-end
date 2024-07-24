import { Component, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';
import { DashboardService } from '../../../dashboard/dashboard.service';

@Component({
  selector: 'hinv-year1-fees',
  templateUrl: './year1-fees.component.html',
  styleUrl: './year1-fees.component.scss',
})
export class Year1FeesComponent {
  dashService = inject(DashboardService);
  sem = this.dashService.sem;
  year = this.dashService.year;
  admissionYear = this.dashService.admissionYear;
}
