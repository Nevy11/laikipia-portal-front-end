import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnitsService } from '../../../../units.service';

@Component({
  selector: 'hinv-table-year3-sem1',
  templateUrl: './table-year3-sem1.component.html',
  styleUrl: './table-year3-sem1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableYear3Sem1Component {
  registeredUnits = this.unitService.units3Sem1;
  dataSource = this.registeredUnits;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  constructor(private unitService: UnitsService) {}
}
