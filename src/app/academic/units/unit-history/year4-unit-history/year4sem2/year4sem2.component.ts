import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnitsService } from '../../../units.service';

@Component({
  selector: 'hinv-year4sem2',
  templateUrl: './year4sem2.component.html',
  styleUrl: './year4sem2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year4sem2Component {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
  admissionYear = this.unitService.admissionYear;
  readonly panelOpenState = signal(false);
  from = this.admissionYear + 3;
  to = this.admissionYear + 4;
  year = this.unitService.year;
  unitHistory = this.unitService.units;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
}
