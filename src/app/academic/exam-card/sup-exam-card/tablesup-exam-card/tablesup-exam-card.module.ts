import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesupExamCardRoutingModule } from './tablesup-exam-card-routing.module';
import { TablesupExamCardComponent } from './tablesup-exam-card.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TablesupExamCardComponent],
  imports: [CommonModule, TablesupExamCardRoutingModule, MatTableModule],
})
export class TablesupExamCardModule {}
