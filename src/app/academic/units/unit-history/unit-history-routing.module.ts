import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitHistoryComponent } from './unit-history.component';

const routes: Routes = [{ path: '', component: UnitHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitHistoryRoutingModule {}
