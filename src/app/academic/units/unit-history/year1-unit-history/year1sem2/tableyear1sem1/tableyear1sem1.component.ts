import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitHistoryService } from '../../../unit-history.service';

@Component({
  selector: 'hinv-tableyear1sem1',
  templateUrl: './tableyear1sem1.component.html',
  styleUrl: './tableyear1sem1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tableyear1sem1Component {
  registeredUnits = this.unitHistoryService.registered_units;
  dataSource = this.registeredUnits;
  @Input() displayedColumns!: string[];
  constructor(private unitHistoryService: UnitHistoryService) {}
}
