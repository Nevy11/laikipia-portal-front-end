import { Component, inject } from '@angular/core';
import { AcademicService } from '../../../academic.service';

@Component({
  selector: 'hinv-marks-table4',
  templateUrl: './marks-table4.component.html',
  styleUrl: './marks-table4.component.scss',
})
export class MarksTable4Component {
  slipService = inject(AcademicService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'hours', 'Grade'];
  dataSource = this.slipService.marks4;
}
