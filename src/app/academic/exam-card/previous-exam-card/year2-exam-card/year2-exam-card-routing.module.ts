import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year2ExamCardComponent } from './year2-exam-card.component';

const routes: Routes = [{ path: '', component: Year2ExamCardComponent }, { path: 'year2table', loadChildren: () => import('./year2table/year2table.module').then(m => m.Year2tableModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year2ExamCardRoutingModule { }
