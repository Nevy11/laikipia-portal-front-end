import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlipComponent } from './slip.component';

const routes: Routes = [{ path: '', component: SlipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlipRoutingModule { }
