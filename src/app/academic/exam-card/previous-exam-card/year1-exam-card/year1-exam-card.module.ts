import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Year1ExamCardRoutingModule } from './year1-exam-card-routing.module';
import { Year1ExamCardComponent } from './year1-exam-card.component';
import { MatTableModule } from '@angular/material/table';
import { Year1tableExamCardComponent } from './year1table-exam-card/year1table-exam-card.component';

@NgModule({
  declarations: [Year1ExamCardComponent, Year1tableExamCardComponent],
  imports: [CommonModule, Year1ExamCardRoutingModule, MatTableModule],
})
export class Year1ExamCardModule {}
