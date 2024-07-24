import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ExamCardService } from '../../exam-card.service';
import { ExamCardTable } from '../../exam-card';
import { Year1tableExamCardComponent } from './year1table-exam-card/year1table-exam-card.component';
import { ExamCardTitleComponent } from '../../admin-exam-card/exam-card-title/exam-card-title.component';
import { StudentInfoExamCardComponent } from '../../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { SignaturesComponent } from '../../admin-exam-card/signatures/signatures.component';
import { NotesComponent } from '../../admin-exam-card/notes/notes.component';

@Component({
  selector: 'hinv-year1-exam-card',
  templateUrl: './year1-exam-card.component.html',
  styleUrl: './year1-exam-card.component.scss',
})
export class Year1ExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(Year1tableExamCardComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
