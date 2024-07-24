import { Component, inject } from '@angular/core';
import { ExamCardService } from '../../exam-card.service';
import { ExamCardTable } from '../../exam-card';

@Component({
  selector: 'hinv-tablesup-exam-card',
  templateUrl: './tablesup-exam-card.component.html',
  styleUrl: './tablesup-exam-card.component.scss',
})
export class TablesupExamCardComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.supExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
