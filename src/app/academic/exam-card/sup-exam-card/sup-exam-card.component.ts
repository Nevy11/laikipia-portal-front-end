import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NotesComponent } from '../admin-exam-card/notes/notes.component';
import { SignaturesComponent } from '../admin-exam-card/signatures/signatures.component';
import { StudentInfoExamCardComponent } from '../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { ExamCardTitleComponent } from '../admin-exam-card/exam-card-title/exam-card-title.component';
import { TablesupExamCardComponent } from './tablesup-exam-card/tablesup-exam-card.component';

@Component({
  selector: 'hinv-sup-exam-card',
  templateUrl: './sup-exam-card.component.html',
  styleUrl: './sup-exam-card.component.scss',
})
export class SupExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(TablesupExamCardComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
