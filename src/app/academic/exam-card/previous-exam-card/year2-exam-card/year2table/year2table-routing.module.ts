import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year2tableComponent } from './year2table.component';

const routes: Routes = [{ path: '', component: Year2tableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year2tableRoutingModule { }
