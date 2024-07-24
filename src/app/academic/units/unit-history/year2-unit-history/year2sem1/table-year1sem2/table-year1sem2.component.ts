import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitHistoryService } from '../../../unit-history.service';
import { UnitsService } from '../../../../units.service';

@Component({
  selector: 'hinv-table-year1sem2',
  templateUrl: './table-year1sem2.component.html',
  styleUrl: './table-year1sem2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableYear1sem2Component {
  registeredUnits = this.unitService.units1Sem2;
  dataSource = this.registeredUnits;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  constructor(
    private unitHistoryService: UnitHistoryService,
    private unitService: UnitsService
  ) {}
}
// unitCode: 'COMP 122',
//       UnitName: 'Digital Electronics 1',
//       Option: 'CORE',
//       Status: 'Approved',
// unitCode: 'comp223',
//       UnitName: 'Introduction to AI',
//       Option: 'CORE',
//       Status: 'Approved',
