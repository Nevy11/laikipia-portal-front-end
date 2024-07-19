import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';
import { UnitsComponent } from './units/units.component';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { ResultSlipComponent } from './result-slip/result-slip.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AcademicComponent,
    UnitsComponent,
    ExamCardComponent,
    ResultSlipComponent,
  ],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    MatTabsModule,
    MatButtonToggleModule,
  ],
})
export class AcademicModule {}
