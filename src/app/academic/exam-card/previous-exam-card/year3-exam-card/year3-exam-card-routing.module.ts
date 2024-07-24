import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year3ExamCardComponent } from './year3-exam-card.component';

const routes: Routes = [{ path: '', component: Year3ExamCardComponent }, { path: 'year3table', loadChildren: () => import('./year3table/year3table.module').then(m => m.Year3tableModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year3ExamCardRoutingModule { }
