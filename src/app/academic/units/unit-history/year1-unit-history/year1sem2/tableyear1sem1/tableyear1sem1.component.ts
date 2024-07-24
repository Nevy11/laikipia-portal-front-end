import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnitsService } from '../../../../units.service';

@Component({
  selector: 'hinv-tableyear1sem1',
  templateUrl: './tableyear1sem1.component.html',
  styleUrl: './tableyear1sem1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tableyear1sem1Component {
  registeredUnits = this.unitService.units;
  dataSource = this.registeredUnits;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  constructor(private unitService: UnitsService) {}
}
