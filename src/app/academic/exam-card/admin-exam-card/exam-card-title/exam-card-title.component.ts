import { Component } from '@angular/core';
import { ExamCardService } from '../../exam-card.service';

@Component({
  selector: 'hinv-exam-card-title',
  templateUrl: './exam-card-title.component.html',
  styleUrl: './exam-card-title.component.scss',
})
export class ExamCardTitleComponent {
  schoolName: string = this.examService.schoolName;
  pOBox: string = this.examService.pOBox;
  cell: string = this.examService.cell;
  email: string = this.examService.email;
  Tel: string = this.examService.Tel;
  constructor(private examService: ExamCardService) {}
}
