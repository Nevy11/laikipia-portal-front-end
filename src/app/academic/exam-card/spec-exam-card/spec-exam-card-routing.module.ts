import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecExamCardComponent } from './spec-exam-card.component';

const routes: Routes = [{ path: '', component: SpecExamCardComponent }, { path: 'tableSpec', loadChildren: () => import('./table-spec/table-spec.module').then(m => m.TableSpecModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecExamCardRoutingModule { }
