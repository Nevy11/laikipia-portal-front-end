import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSpecComponent } from './table-spec.component';

const routes: Routes = [{ path: '', component: TableSpecComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableSpecRoutingModule { }
