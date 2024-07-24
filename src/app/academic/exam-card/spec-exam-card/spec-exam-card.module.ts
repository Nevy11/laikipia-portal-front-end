import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecExamCardRoutingModule } from './spec-exam-card-routing.module';
import { SpecExamCardComponent } from './spec-exam-card.component';


@NgModule({
  declarations: [
    SpecExamCardComponent
  ],
  imports: [
    CommonModule,
    SpecExamCardRoutingModule
  ]
})
export class SpecExamCardModule { }
