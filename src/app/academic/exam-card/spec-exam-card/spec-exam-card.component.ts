import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ExamCardTitleComponent } from '../admin-exam-card/exam-card-title/exam-card-title.component';
import { StudentInfoExamCardComponent } from '../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { NotesComponent } from '../admin-exam-card/notes/notes.component';
import { SignaturesComponent } from '../admin-exam-card/signatures/signatures.component';
import { TableSpecComponent } from './table-spec/table-spec.component';

@Component({
  selector: 'hinv-spec-exam-card',
  templateUrl: './spec-exam-card.component.html',
  styleUrl: './spec-exam-card.component.scss',
})
export class SpecExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(TableSpecComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
