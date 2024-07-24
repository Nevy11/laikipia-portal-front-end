import { Component, ViewContainerRef, inject } from '@angular/core';
import { NotesComponent } from '../../../admin-exam-card/notes/notes.component';
import { Year2tableComponent } from '../../year2-exam-card/year2table/year2table.component';
import { SignaturesComponent } from '../../../admin-exam-card/signatures/signatures.component';
import { StudentInfoExamCardComponent } from '../../../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { ExamCardTitleComponent } from '../../../admin-exam-card/exam-card-title/exam-card-title.component';

@Component({
  selector: 'hinv-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss',
})
export class TwoComponent {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ExamCardTitleComponent);
    this.vcr.createComponent(StudentInfoExamCardComponent);
    this.vcr.createComponent(Year2tableComponent);
    this.vcr.createComponent(SignaturesComponent);
    this.vcr.createComponent(NotesComponent);
  }
}
