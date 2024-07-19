import { Component, inject } from '@angular/core';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'hinv-year3-unit-history',
  templateUrl: './year3-unit-history.component.html',
  styleUrl: './year3-unit-history.component.scss',
})
export class Year3UnitHistoryComponent {
  unitService = inject(UnitsService);
  sem = this.unitService.sem;
}
