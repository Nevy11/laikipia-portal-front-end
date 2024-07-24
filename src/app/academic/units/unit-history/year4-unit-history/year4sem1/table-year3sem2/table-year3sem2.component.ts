import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnitsService } from '../../../../units.service';

@Component({
  selector: 'hinv-table-year3sem2',
  templateUrl: './table-year3sem2.component.html',
  styleUrl: './table-year3sem2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableYear3sem2Component {
  registeredUnits = this.unitService.units3sem2;
  dataSource = this.registeredUnits;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  constructor(private unitService: UnitsService) {}
}
