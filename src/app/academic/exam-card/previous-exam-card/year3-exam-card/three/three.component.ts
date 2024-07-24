import { Component, ViewContainerRef, inject } from '@angular/core';
import { Year3tableComponent } from '../year3table/year3table.component';
import { ExamCardTitleComponent } from '../../../admin-exam-card/exam-card-title/exam-card-title.component';
import { StudentInfoExamCardComponent } from '../../../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { SignaturesComponent } from '../../../admin-exam-card/signatures/signatures.component';
import { NotesComponent } from '../../../admin-exam-card/notes/notes.component';

@Component({
  selector: 'hinv-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss',
})
export class ThreeComponent {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(Year3tableComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
