import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitHistoryService } from '../../../unit-history.service';

@Component({
  selector: 'hinv-table-year2-sem2',
  templateUrl: './table-year2-sem2.component.html',
  styleUrl: './table-year2-sem2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableYear2Sem2Component {
  registeredUnits = this.unitHistoryService.registered_units;
  dataSource = this.registeredUnits;
  @Input() displayedColumns!: string[];
  constructor(private unitHistoryService: UnitHistoryService) {}
}
