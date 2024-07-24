import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Slip3ResultComponent } from './slip3-result.component';

const routes: Routes = [{ path: '', component: Slip3ResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Slip3ResultRoutingModule { }
