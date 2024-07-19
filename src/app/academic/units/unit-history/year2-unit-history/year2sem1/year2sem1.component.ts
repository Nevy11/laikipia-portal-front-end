import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnitsService } from '../../../units.service';

@Component({
  selector: 'hinv-year2sem1',
  templateUrl: './year2sem1.component.html',
  styleUrl: './year2sem1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year2sem1Component {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
  admissionYear = this.unitService.admissionYear;
  readonly panelOpenState = signal(false);
  from = this.admissionYear;
  to = this.admissionYear + 1;
  year = this.unitService.year;
  unitHistory = this.unitService;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
}
