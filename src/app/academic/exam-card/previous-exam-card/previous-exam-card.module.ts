import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviousExamCardRoutingModule } from './previous-exam-card-routing.module';
import { PreviousExamCardComponent } from './previous-exam-card.component';


@NgModule({
  declarations: [
    PreviousExamCardComponent
  ],
  imports: [
    CommonModule,
    PreviousExamCardRoutingModule
  ]
})
export class PreviousExamCardModule { }
