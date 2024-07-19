import { Component, inject } from '@angular/core';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'hinv-year4-unit-history',
  templateUrl: './year4-unit-history.component.html',
  styleUrl: './year4-unit-history.component.scss',
})
export class Year4UnitHistoryComponent {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
}
