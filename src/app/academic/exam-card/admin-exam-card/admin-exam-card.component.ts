import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ExamCardTitleComponent } from './exam-card-title/exam-card-title.component';
import { ExamCardTableComponent } from './exam-card-table/exam-card-table.component';
import { StudentInfoExamCardComponent } from './student-info-exam-card/student-info-exam-card.component';
import { SignaturesComponent } from './signatures/signatures.component';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'hinv-admin-exam-card',
  templateUrl: './admin-exam-card.component.html',
  styleUrl: './admin-exam-card.component.scss',
})
export class AdminExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(ExamCardTableComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
