import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Slip2ResultComponent } from './slip2-result.component';

const routes: Routes = [{ path: '', component: Slip2ResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Slip2ResultRoutingModule { }
