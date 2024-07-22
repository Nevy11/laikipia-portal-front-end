import { Component, inject } from '@angular/core';
import { DefermentService } from '../deferment.service';

@Component({
  selector: 'hinv-deferment-table',
  templateUrl: './deferment-table.component.html',
  styleUrl: './deferment-table.component.scss',
})
export class DefermentTableComponent {
  defermentService = inject(DefermentService);
  defermentData = this.defermentService.defermentData;
  displayedColumns = [
    'index',
    'notes',
    'reasons',
    'hodApproval',
    'registrarApproval',
  ];
  dataSource = this.defermentData;
}
