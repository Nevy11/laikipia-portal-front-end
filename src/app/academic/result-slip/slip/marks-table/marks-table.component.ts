import { Component, inject } from '@angular/core';
import { AcademicService } from '../../../academic.service';

@Component({
  selector: 'hinv-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrl: './marks-table.component.scss',
})
export class MarksTableComponent {
  slipService = inject(AcademicService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'hours', 'Grade'];
  dataSource = this.slipService.Marks;
}
