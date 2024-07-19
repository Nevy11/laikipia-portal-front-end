import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnitsService } from '../../../units.service';

@Component({
  selector: 'hinv-year3sem2',
  templateUrl: './year3sem2.component.html',
  styleUrl: './year3sem2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year3sem2Component {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
  admissionYear = this.unitService.admissionYear;
  readonly panelOpenState = signal(false);
  from = this.admissionYear + 2;
  to = this.admissionYear + 3;
  year = this.unitService.year;
  unitHistory = this.unitService.units;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
}
