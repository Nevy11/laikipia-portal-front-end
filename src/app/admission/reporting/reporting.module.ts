import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting.component';
import { ReportingTitleComponent } from './reporting-title/reporting-title.component';
import { ReportingTableComponent } from './reporting-table/reporting-table.component';

@NgModule({
  declarations: [
    ReportingComponent,
    ReportingTitleComponent,
    ReportingTableComponent,
  ],
  imports: [CommonModule, ReportingRoutingModule, MatTableModule],
})
export class ReportingModule {}
