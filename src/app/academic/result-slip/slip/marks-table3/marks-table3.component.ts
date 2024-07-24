import { Component, inject } from '@angular/core';
import { AcademicService } from '../../../academic.service';

@Component({
  selector: 'hinv-marks-table3',
  templateUrl: './marks-table3.component.html',
  styleUrl: './marks-table3.component.scss',
})
export class MarksTable3Component {
  slipService = inject(AcademicService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'hours', 'Grade'];
  dataSource = this.slipService.Marks3;
}
