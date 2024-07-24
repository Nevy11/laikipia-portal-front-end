import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupExamCardComponent } from './sup-exam-card.component';

const routes: Routes = [{ path: '', component: SupExamCardComponent }, { path: 'tableSupExamCard', loadChildren: () => import('./tablesup-exam-card/tablesup-exam-card.module').then(m => m.TablesupExamCardModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupExamCardRoutingModule { }
