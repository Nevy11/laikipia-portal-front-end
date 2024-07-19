import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'hinv-year1-unit-history',
  templateUrl: './year1-unit-history.component.html',
  styleUrl: './year1-unit-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year1UnitHistoryComponent {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
  readonly panelOpenState = signal(false);

  year = this.unitService.year;
  unitHistory = this.unitService.units;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
}
