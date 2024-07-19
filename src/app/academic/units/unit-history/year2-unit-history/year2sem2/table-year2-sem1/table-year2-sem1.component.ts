import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnitHistoryService } from '../../../unit-history.service';

@Component({
  selector: 'hinv-table-year2-sem1',
  templateUrl: './table-year2-sem1.component.html',
  styleUrl: './table-year2-sem1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableYear2Sem1Component {
  registeredUnits = this.unitHistoryService.registered_units;
  dataSource = this.registeredUnits;
  @Input() displayedColumns!: string[];
  constructor(private unitHistoryService: UnitHistoryService) {}
}
