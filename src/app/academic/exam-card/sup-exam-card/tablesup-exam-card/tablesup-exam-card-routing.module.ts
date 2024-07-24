import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesupExamCardComponent } from './tablesup-exam-card.component';

const routes: Routes = [{ path: '', component: TablesupExamCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesupExamCardRoutingModule { }
