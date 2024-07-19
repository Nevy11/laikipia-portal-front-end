import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { UnitHistoryRoutingModule } from './unit-history-routing.module';
import { UnitHistoryComponent } from './unit-history.component';
import { Year1UnitHistoryComponent } from './year1-unit-history/year1-unit-history.component';
import { Year2UnitHistoryComponent } from './year2-unit-history/year2-unit-history.component';
import { Year3UnitHistoryComponent } from './year3-unit-history/year3-unit-history.component';
import { Year4UnitHistoryComponent } from './year4-unit-history/year4-unit-history.component';
import { MatTableModule } from '@angular/material/table';
import { Year1sem1Component } from './year1-unit-history/year1sem1/year1sem1.component';
import { Year1sem2Component } from './year1-unit-history/year1sem2/year1sem2.component';
import { Year2sem1Component } from './year2-unit-history/year2sem1/year2sem1.component';
import { Year2sem2Component } from './year2-unit-history/year2sem2/year2sem2.component';
import { Year3sem1Component } from './year3-unit-history/year3sem1/year3sem1.component';
import { Year3sem2Component } from './year3-unit-history/year3sem2/year3sem2.component';
import { Year4sem1Component } from './year4-unit-history/year4sem1/year4sem1.component';
import { Year4sem2Component } from './year4-unit-history/year4sem2/year4sem2.component';
@NgModule({
  declarations: [
    UnitHistoryComponent,
    Year1UnitHistoryComponent,
    Year2UnitHistoryComponent,
    Year3UnitHistoryComponent,
    Year4UnitHistoryComponent,
    Year1sem1Component,
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
    UnitHistoryRoutingModule,
    MatExpansionModule,
    MatTableModule,
  ],
})
export class UnitHistoryModule {}
