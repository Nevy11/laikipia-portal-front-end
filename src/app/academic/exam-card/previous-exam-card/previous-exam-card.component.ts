import { Component, ViewContainerRef, inject } from '@angular/core';
import { AdminExamCardComponent } from '../admin-exam-card/admin-exam-card.component';
import { TablePreviousExamCardComponent } from './table-previous-exam-card/table-previous-exam-card.component';
import { StudentInfoExamCardComponent } from '../admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { ExamCardTitleComponent } from '../admin-exam-card/exam-card-title/exam-card-title.component';
import { SignaturesComponent } from '../admin-exam-card/signatures/signatures.component';
import { NotesComponent } from '../admin-exam-card/notes/notes.component';
import { DashboardService } from '../../../dashboard/dashboard.service';
import { NoPreviousCardComponent } from './no-previous-card/no-previous-card.component';
import { Year1ExamCardComponent } from './year1-exam-card/year1-exam-card.component';
import { Year2ExamCardComponent } from './year2-exam-card/year2-exam-card.component';
import { Year3ExamCardComponent } from './year3-exam-card/year3-exam-card.component';

@Component({
  selector: 'hinv-previous-exam-card',
  templateUrl: './previous-exam-card.component.html',
  styleUrl: './previous-exam-card.component.scss',
})
export class PreviousExamCardComponent {
  vcr = inject(ViewContainerRef);
  dashService = inject(DashboardService);
  year = this.dashService.year;
  ngAfterViewInit(): void {
    if (this.year === 1) {
      this.vcr.createComponent(NoPreviousCardComponent);
    }
    if (this.year === 2) {
      this.vcr.createComponent(Year1ExamCardComponent);
    }
    if (this.year === 3) {
      this.vcr.createComponent(Year2ExamCardComponent);
    }
    if (this.year === 4) {
      this.vcr.createComponent(Year3ExamCardComponent);
    }
  }
}
