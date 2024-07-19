import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnitsService } from '../../../units.service';

@Component({
  selector: 'hinv-year1sem2',
  templateUrl: './year1sem2.component.html',
  styleUrl: './year1sem2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year1sem2Component {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
  admissionYear = this.unitService.admissionYear;
  readonly panelOpenState = signal(false);

  year = this.unitService.year;
  unitHistory = this.unitService.units;
  dataSource = this.unitHistory;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
}
