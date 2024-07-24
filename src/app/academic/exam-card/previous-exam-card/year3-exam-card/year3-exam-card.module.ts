import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Year3ExamCardRoutingModule } from './year3-exam-card-routing.module';
import { Year3ExamCardComponent } from './year3-exam-card.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';

@NgModule({
  declarations: [Year3ExamCardComponent, ThreeComponent, TwoComponent, OneComponent],
  imports: [
    CommonModule,
    Year3ExamCardRoutingModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class Year3ExamCardModule {}
