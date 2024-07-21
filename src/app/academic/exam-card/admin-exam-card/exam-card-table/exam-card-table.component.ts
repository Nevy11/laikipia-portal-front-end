import { Component, inject } from '@angular/core';
import { ExamCardTable } from './exam-card-table';
import { ExamCardServiceService } from './exam-card-service.service';

@Component({
  selector: 'hinv-exam-card-table',
  templateUrl: './exam-card-table.component.html',
  styleUrl: './exam-card-table.component.scss',
})
export class ExamCardTableComponent {
  examCardService = inject(ExamCardServiceService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.units;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
