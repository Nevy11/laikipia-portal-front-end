import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePreviousExamCardComponent } from './table-previous-exam-card.component';

const routes: Routes = [{ path: '', component: TablePreviousExamCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePreviousExamCardRoutingModule { }
