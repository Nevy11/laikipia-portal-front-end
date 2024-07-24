import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPreviousCardComponent } from './no-previous-card.component';

const routes: Routes = [{ path: '', component: NoPreviousCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoPreviousCardRoutingModule { }
