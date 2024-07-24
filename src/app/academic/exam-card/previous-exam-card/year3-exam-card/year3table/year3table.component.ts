import { Component, inject } from '@angular/core';
import { ExamCardService } from '../../../exam-card.service';
import { ExamCardTable } from '../../../exam-card';

@Component({
  selector: 'hinv-year3table',
  templateUrl: './year3table.component.html',
  styleUrl: './year3table.component.scss',
})
export class Year3tableComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.thirdYearExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
