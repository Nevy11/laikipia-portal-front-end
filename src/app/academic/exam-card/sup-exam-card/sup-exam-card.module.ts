import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupExamCardRoutingModule } from './sup-exam-card-routing.module';
import { SupExamCardComponent } from './sup-exam-card.component';


@NgModule({
  declarations: [
    SupExamCardComponent
  ],
  imports: [
    CommonModule,
    SupExamCardRoutingModule
  ]
})
export class SupExamCardModule { }
