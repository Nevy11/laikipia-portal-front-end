import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FinancialsRoutingModule } from './financials-routing.module';
import { FinancialsComponent } from './financials.component';
import { CostComponent } from './cost/cost.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MpesaComponent } from './mpesa/mpesa.component';
import { MpesaDialogComponent } from './mpesa/mpesa-dialog/mpesa-dialog.component';
import { EquityComponent } from './equity/equity.component';
import { EquityDialogComponent } from './equity/equity-dialog/equity-dialog.component';
import { CoOpComponent } from './co-op/co-op.component';
import { CoOpDialogueComponent } from './co-op/co-op-dialogue/co-op-dialogue.component';
import { KcbComponent } from './kcb/kcb.component';
import { KcbDialogueComponent } from './kcb/kcb-dialogue/kcb-dialogue.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CostYear2Component } from './cost-year2/cost-year2.component';
import { CostYear3Component } from './cost-year3/cost-year3.component';
import { CostYear4Component } from './cost-year4/cost-year4.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { LuInfoComponent } from './fee-structure/lu-info/lu-info.component';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { StudentInfoComponent } from './fee-structure/student-info/student-info.component';
import { StudentInfo2Component } from './fee-structure/student-info2/student-info2.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaidFeesComponent } from './fee-structure/paid-fees/paid-fees.component';
import { Year1FeesComponent } from './fee-structure/year1-fees/year1-fees.component';
import { Year2FeesComponent } from './fee-structure/year2-fees/year2-fees.component';
import { Year3FeesComponent } from './fee-structure/year3-fees/year3-fees.component';
import { Year4FeesComponent } from './fee-structure/year4-fees/year4-fees.component';

@NgModule({
  declarations: [
    FinancialsComponent,
    CostComponent,
    MpesaComponent,
    MpesaDialogComponent,
    EquityComponent,
    EquityDialogComponent,
    CoOpComponent,
    CoOpDialogueComponent,
    KcbComponent,
    KcbDialogueComponent,
    CostYear2Component,
    CostYear3Component,
    CostYear4Component,
    FeeStructureComponent,
    LuInfoComponent,
    StudentInfoComponent,
    StudentInfo2Component,
    PaidFeesComponent,
    Year1FeesComponent,
    Year2FeesComponent,
    Year3FeesComponent,
    Year4FeesComponent,
  ],
  imports: [
    CommonModule,
    FinancialsRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    NgOptimizedImage,
    MatGridListModule,
  ],
})
export class FinancialsModule {}
