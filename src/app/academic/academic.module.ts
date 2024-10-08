import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';
import { UnitsComponent } from './units/units.component';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { ResultSlipComponent } from './result-slip/result-slip.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CurrentExamCardComponent } from './exam-card/current-exam-card/current-exam-card.component';
import { AdminExamCardComponent } from './exam-card/admin-exam-card/admin-exam-card.component';
import { ExamCardTitleComponent } from './exam-card/admin-exam-card/exam-card-title/exam-card-title.component';
import { StudentInfoExamCardComponent } from './exam-card/admin-exam-card/student-info-exam-card/student-info-exam-card.component';
import { ExamCardTableComponent } from './exam-card/admin-exam-card/exam-card-table/exam-card-table.component';
import { MatTableModule } from '@angular/material/table';
import { SignaturesComponent } from './exam-card/admin-exam-card/signatures/signatures.component';
import { LeftSignaturesComponent } from './exam-card/admin-exam-card/signatures/left-signatures/left-signatures.component';
import { RightSignaturesComponent } from './exam-card/admin-exam-card/signatures/right-signatures/right-signatures.component';
import { CurrentExamCardTableComponent } from './exam-card/current-exam-card/current-exam-card-table/current-exam-card-table.component';
import { NotesComponent } from './exam-card/admin-exam-card/notes/notes.component';
import { PreviousComponent } from './exam-card/previous/previous.component';
import { SpecComponent } from './exam-card/spec/spec.component';
import { SupComponent } from './exam-card/sup/sup.component';

@NgModule({
  declarations: [
    AcademicComponent,
    UnitsComponent,
    ExamCardComponent,
    ResultSlipComponent,
    CurrentExamCardComponent,
    AdminExamCardComponent,
    ExamCardTitleComponent,
    StudentInfoExamCardComponent,
    ExamCardTableComponent,
    SignaturesComponent,
    LeftSignaturesComponent,
    RightSignaturesComponent,
    CurrentExamCardTableComponent,
    NotesComponent,
    PreviousComponent,
    SpecComponent,
    SupComponent,
  ],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
  ],
})
export class AcademicModule {}
