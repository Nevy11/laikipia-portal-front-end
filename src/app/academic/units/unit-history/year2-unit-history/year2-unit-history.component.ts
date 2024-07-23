import { Component, OnInit, inject } from '@angular/core';
import { UnitsService } from '../../units.service';
import { DashboardService } from '../../../../dashboard/dashboard.service';

@Component({
  selector: 'hinv-year2-unit-history',
  templateUrl: './year2-unit-history.component.html',
  styleUrl: './year2-unit-history.component.scss',
})
export class Year2UnitHistoryComponent implements OnInit {
  dashService = inject(DashboardService);
  unitService = inject(UnitsService);
  sem = this.dashService.sem;

  year = this.dashService.year;
  unitHistory = this.unitService.units;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  ngOnInit(): void {
    console.log(this.sem);
  }
}
