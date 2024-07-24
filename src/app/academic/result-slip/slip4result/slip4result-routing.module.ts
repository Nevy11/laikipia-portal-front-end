import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Slip4resultComponent } from './slip4result.component';

const routes: Routes = [{ path: '', component: Slip4resultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Slip4resultRoutingModule { }
