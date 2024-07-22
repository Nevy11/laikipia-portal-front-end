import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationsComponent } from './evaluations.component';
import { MatTableModule } from '@angular/material/table';
import { EvaluationTableComponent } from './evaluation-table/evaluation-table.component';
import { TitleEvaluationComponent } from './title-evaluation/title-evaluation.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { HistoryEvaluationsComponent } from './history-evaluations/history-evaluations.component';

@NgModule({
  declarations: [
    EvaluationsComponent,
    EvaluationTableComponent,
    TitleEvaluationComponent,
    HistoryEvaluationsComponent,
  ],
  imports: [
    CommonModule,
    EvaluationsRoutingModule,
    MatTableModule,
    MatButtonToggleModule,
    FormsModule,
    CdkDropList,
    CdkDrag,
  ],
})
export class EvaluationsModule {}
