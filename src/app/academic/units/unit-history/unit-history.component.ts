import { Component, inject } from '@angular/core';
import { UnitsService } from '../units.service';

@Component({
  selector: 'hinv-unit-history',
  templateUrl: './unit-history.component.html',
  styleUrl: './unit-history.component.scss',
})
export class UnitHistoryComponent {
  unitService = inject(UnitsService);
  year = this.unitService.year;
  sem: number = this.unitService.sem;
}
