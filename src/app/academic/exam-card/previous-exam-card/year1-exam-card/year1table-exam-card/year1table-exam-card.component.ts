import { Component, inject } from '@angular/core';
import { ExamCardTable } from '../../../exam-card';
import { ExamCardService } from '../../../exam-card.service';

@Component({
  selector: 'hinv-year1table-exam-card',
  templateUrl: './year1table-exam-card.component.html',
  styleUrl: './year1table-exam-card.component.scss',
})
export class Year1tableExamCardComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.firstYearExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
