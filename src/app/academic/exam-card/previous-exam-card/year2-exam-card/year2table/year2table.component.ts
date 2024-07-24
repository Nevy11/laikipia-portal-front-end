import { Component, inject } from '@angular/core';
import { ExamCardService } from '../../../exam-card.service';
import { ExamCardTable } from '../../../exam-card';

@Component({
  selector: 'hinv-year2table',
  templateUrl: './year2table.component.html',
  styleUrl: './year2table.component.scss',
})
export class Year2tableComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.SecondYearExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
