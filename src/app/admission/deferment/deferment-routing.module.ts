import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefermentComponent } from './deferment.component';

const routes: Routes = [{ path: '', component: DefermentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefermentRoutingModule { }
