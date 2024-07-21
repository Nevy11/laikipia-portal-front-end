import { Component, inject } from '@angular/core';
import { ResultSlipService } from '../../result-slip.service';

@Component({
  selector: 'hinv-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrl: './marks-table.component.scss',
})
export class MarksTableComponent {
  slipService = inject(ResultSlipService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'hours', 'Grade'];
  dataSource = this.slipService.Marks;
}
