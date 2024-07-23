import { Component, inject } from '@angular/core';
import { ExamCardService } from '../../exam-card.service';
import { ExamCardTable } from '../../exam-card';

@Component({
  selector: 'hinv-exam-card-table',
  templateUrl: './exam-card-table.component.html',
  styleUrl: './exam-card-table.component.scss',
})
export class ExamCardTableComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.units;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
