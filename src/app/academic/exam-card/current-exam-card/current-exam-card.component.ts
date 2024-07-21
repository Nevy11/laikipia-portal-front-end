import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CurrentExamCardTableComponent } from './current-exam-card-table/current-exam-card-table.component';
import { StudentInfoExamCardComponent } from '../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { ExamCardTitleComponent } from '../admin-exam-card/exam-card-title/exam-card-title.component';
import { SignaturesComponent } from '../admin-exam-card/signatures/signatures.component';
import { NotesComponent } from '../admin-exam-card/notes/notes.component';

@Component({
  selector: 'hinv-current-exam-card',
  templateUrl: './current-exam-card.component.html',
  styleUrl: './current-exam-card.component.scss',
})
export class CurrentExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(CurrentExamCardTableComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
