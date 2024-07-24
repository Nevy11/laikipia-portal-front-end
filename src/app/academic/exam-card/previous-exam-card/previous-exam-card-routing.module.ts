import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviousExamCardComponent } from './previous-exam-card.component';

const routes: Routes = [{ path: '', component: PreviousExamCardComponent }, { path: 'tablePreviousExamCard', loadChildren: () => import('./table-previous-exam-card/table-previous-exam-card.module').then(m => m.TablePreviousExamCardModule) }, { path: 'noPreviousCard', loadChildren: () => import('./no-previous-card/no-previous-card.module').then(m => m.NoPreviousCardModule) }, { path: 'year1ExamCard', loadChildren: () => import('./year1-exam-card/year1-exam-card.module').then(m => m.Year1ExamCardModule) }, { path: 'year2ExamCard', loadChildren: () => import('./year2-exam-card/year2-exam-card.module').then(m => m.Year2ExamCardModule) }, { path: 'year3ExamCard', loadChildren: () => import('./year3-exam-card/year3-exam-card.module').then(m => m.Year3ExamCardModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousExamCardRoutingModule { }
