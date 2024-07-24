import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePreviousExamCardRoutingModule } from './table-previous-exam-card-routing.module';
import { TablePreviousExamCardComponent } from './table-previous-exam-card.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TablePreviousExamCardComponent],
  imports: [CommonModule, TablePreviousExamCardRoutingModule, MatTableModule],
})
export class TablePreviousExamCardModule {}
