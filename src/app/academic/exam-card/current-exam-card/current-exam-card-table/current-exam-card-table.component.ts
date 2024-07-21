import { Component, inject } from '@angular/core';
import { ExamCardServiceService } from '../../admin-exam-card/exam-card-table/exam-card-service.service';
import { ExamCardTable } from '../../admin-exam-card/exam-card-table/exam-card-table';

@Component({
  selector: 'hinv-current-exam-card-table',
  templateUrl: './current-exam-card-table.component.html',
  styleUrl: './current-exam-card-table.component.scss',
})
export class CurrentExamCardTableComponent {
  examCardService = inject(ExamCardServiceService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.currentExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
