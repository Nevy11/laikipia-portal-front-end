import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year3tableComponent } from './year3table.component';

const routes: Routes = [{ path: '', component: Year3tableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year3tableRoutingModule { }
