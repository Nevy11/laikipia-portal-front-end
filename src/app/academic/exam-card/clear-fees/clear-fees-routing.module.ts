import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearFeesComponent } from './clear-fees.component';

const routes: Routes = [{ path: '', component: ClearFeesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearFeesRoutingModule { }
