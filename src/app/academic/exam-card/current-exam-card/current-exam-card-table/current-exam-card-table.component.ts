import { Component, inject } from '@angular/core';
import { ExamCardService } from '../../exam-card.service';
import { ExamCardTable } from '../../exam-card';

@Component({
  selector: 'hinv-current-exam-card-table',
  templateUrl: './current-exam-card-table.component.html',
  styleUrl: './current-exam-card-table.component.scss',
})
export class CurrentExamCardTableComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.currentExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
