import { Component, inject } from '@angular/core';
import { Units } from '../../units';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'hinv-allow-registration',
  templateUrl: './allow-registration.component.html',
  styleUrl: './allow-registration.component.scss',
})
export class AllowRegistrationComponent {
  unitService = inject(UnitsService);
  REGISTRATIONDATA: Units[] = this.unitService.units;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'Option', 'Status'];
  dataSource = this.REGISTRATIONDATA;
}
