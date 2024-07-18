import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialsRoutingModule } from './financials-routing.module';
import { FinancialsComponent } from './financials.component';
import { CostComponent } from './cost/cost.component';
import { SemisterButtonComponent } from './semister-button/semister-button.component';
import { Semister2Component } from './semister2/semister2.component';
import { Semister3Component } from './semister3/semister3.component';
import { Semister4Component } from './semister4/semister4.component';
import { Cost2YearComponent } from './semister2/cost2-year/cost2-year.component';
import { Cost3yearComponent } from './semister3/cost3year/cost3year.component';
import { Year4CostComponent } from './semister4/year4-cost/year4-cost.component';


@NgModule({
  declarations: [
    FinancialsComponent,
    CostComponent,
    SemisterButtonComponent,
    Semister2Component,
    Semister3Component,
    Semister4Component,
    Cost2YearComponent,
    Cost3yearComponent,
    Year4CostComponent
  ],
  imports: [
    CommonModule,
    FinancialsRoutingModule
  ]
})
export class FinancialsModule { }
