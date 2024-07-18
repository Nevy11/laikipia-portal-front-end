import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialsComponent } from './financials.component';
import { CostComponent } from './cost/cost.component';
import { CostGuard } from './cost/guards/cost.guard';

const routes: Routes = [
  { path: '', component: FinancialsComponent },
  {
    path: 'cost',
    component: CostComponent,
    resolve: {
      costs: CostGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialsRoutingModule {}
