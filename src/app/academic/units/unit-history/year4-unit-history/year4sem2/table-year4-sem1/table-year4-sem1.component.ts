import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitHistoryService } from '../../../unit-history.service';
import { UnitsService } from '../../../../units.service';

@Component({
  selector: 'hinv-table-year4-sem1',
  templateUrl: './table-year4-sem1.component.html',
  styleUrl: './table-year4-sem1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableYear4Sem1Component {
  registeredUnits = this.unitService.units4sem1;
  dataSource = this.registeredUnits;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  constructor(private unitService: UnitsService) {}
}
