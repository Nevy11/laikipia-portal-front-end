import { Component, inject } from '@angular/core';
import { ExamCardTable } from '../../exam-card';
import { ExamCardService } from '../../exam-card.service';

@Component({
  selector: 'hinv-table-previous-exam-card',
  templateUrl: './table-previous-exam-card.component.html',
  styleUrl: './table-previous-exam-card.component.scss',
})
export class TablePreviousExamCardComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.previousExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
