import { Component, inject } from '@angular/core';
import { ExamCardTable } from '../../exam-card';
import { ExamCardService } from '../../exam-card.service';

@Component({
  selector: 'hinv-table-spec',
  templateUrl: './table-spec.component.html',
  styleUrl: './table-spec.component.scss',
})
export class TableSpecComponent {
  examCardService = inject(ExamCardService);
  REGISTRATIONDATA: ExamCardTable[] = this.examCardService.specExamCard;
  displayedColumns: string[] = ['unitCode', 'UnitName', 'signature', 'date'];
  dataSource = this.REGISTRATIONDATA;
}
