import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { Year2ExamCardRoutingModule } from './year2-exam-card-routing.module';
import { Year2ExamCardComponent } from './year2-exam-card.component';
import { FormsModule } from '@angular/forms';
import { YearSelected1Component } from './year-selected1/year-selected1.component';
import { YearSelected2Component } from './year-selected2/year-selected2.component';

@NgModule({
  declarations: [Year2ExamCardComponent, YearSelected1Component, YearSelected2Component],
  imports: [
    CommonModule,
    Year2ExamCardRoutingModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class Year2ExamCardModule {}
