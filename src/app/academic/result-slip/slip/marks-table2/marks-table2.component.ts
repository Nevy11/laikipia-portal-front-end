import { Component, inject } from '@angular/core';
import { AcademicService } from '../../../academic.service';

@Component({
  selector: 'hinv-marks-table2',
  templateUrl: './marks-table2.component.html',
  styleUrl: './marks-table2.component.scss',
})
export class MarksTable2Component {
  slipService = inject(AcademicService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'hours', 'Grade'];
  dataSource = this.slipService.Marks2;
}
