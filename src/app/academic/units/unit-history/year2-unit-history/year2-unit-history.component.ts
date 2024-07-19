import { Component, inject } from '@angular/core';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'hinv-year2-unit-history',
  templateUrl: './year2-unit-history.component.html',
  styleUrl: './year2-unit-history.component.scss',
})
export class Year2UnitHistoryComponent {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;

  year = this.unitService.year;
  unitHistory = this.unitService.units;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
}
