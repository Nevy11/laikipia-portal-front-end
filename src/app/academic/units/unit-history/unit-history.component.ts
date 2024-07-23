import { Component, inject } from '@angular/core';
import { UnitsService } from '../units.service';
import { DashboardService } from '../../../dashboard/dashboard.service';

@Component({
  selector: 'hinv-unit-history',
  templateUrl: './unit-history.component.html',
  styleUrl: './unit-history.component.scss',
})
export class UnitHistoryComponent {
  dashService = inject(DashboardService);
  year = this.dashService.year;
  sem: number = this.dashService.sem;
}
