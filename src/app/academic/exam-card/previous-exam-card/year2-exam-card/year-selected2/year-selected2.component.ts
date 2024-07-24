import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NotesComponent } from '../../../admin-exam-card/notes/notes.component';
import { SignaturesComponent } from '../../../admin-exam-card/signatures/signatures.component';
import { Year2tableComponent } from '../year2table/year2table.component';
import { StudentInfoExamCardComponent } from '../../../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { ExamCardTitleComponent } from '../../../admin-exam-card/exam-card-title/exam-card-title.component';

@Component({
  selector: 'hinv-year-selected2',
  templateUrl: './year-selected2.component.html',
  styleUrl: './year-selected2.component.scss',
})
export class YearSelected2Component implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(Year2tableComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
