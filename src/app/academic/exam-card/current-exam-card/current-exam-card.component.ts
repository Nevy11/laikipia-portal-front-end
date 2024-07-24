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
import { DashboardService } from '../../../dashboard/dashboard.service';
import { ClearFeesComponent } from '../clear-fees/clear-fees.component';

@Component({
  selector: 'hinv-current-exam-card',
  templateUrl: './current-exam-card.component.html',
  styleUrl: './current-exam-card.component.scss',
})
export class CurrentExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  dashService = inject(DashboardService);
  feeBalance = this.dashService.feeBalance;
  ngAfterViewInit(): void {
    if (this.feeBalance === 0) {
      this.vcr.createComponent(ExamCardTitleComponent);
      this.vcr.createComponent(StudentInfoExamCardComponent);
      this.vcr.createComponent(CurrentExamCardTableComponent);
      this.vcr.createComponent(SignaturesComponent);
      this.vcr.createComponent(NotesComponent);
    } else {
      this.vcr.createComponent(ClearFeesComponent);
    }
  }
}

// PreviousExamCardComponent
// SpecExamCardComponent
// SupExamCardComponent
