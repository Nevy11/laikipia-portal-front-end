import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year1ExamCardComponent } from './year1-exam-card.component';

const routes: Routes = [{ path: '', component: Year1ExamCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year1ExamCardRoutingModule { }
