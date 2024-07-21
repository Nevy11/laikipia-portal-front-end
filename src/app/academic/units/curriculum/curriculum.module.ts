import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';
import { Year1Sem1Component } from './year1-sem1/year1-sem1.component';
import { Year1sem2Component } from './year1sem2/year1sem2.component';
import { Year2sem1Component } from './year2sem1/year2sem1.component';
import { Year2sem2Component } from './year2sem2/year2sem2.component';
import { Year3sem1Component } from './year3sem1/year3sem1.component';
import { Year3sem2Component } from './year3sem2/year3sem2.component';
import { Year4sem1Component } from './year4sem1/year4sem1.component';
import { Year4sem2Component } from './year4sem2/year4sem2.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CurriculumComponent,
    Year1Sem1Component,
    Year1sem2Component,
    Year2sem1Component,
    Year2sem2Component,
    Year3sem1Component,
    Year3sem2Component,
    Year4sem1Component,
    Year4sem2Component,
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    MatExpansionModule,
    MatTableModule,
  ],
})
export class CurriculumModule {}
