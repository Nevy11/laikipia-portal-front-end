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
  // { path: 'costYear2', loadChildren: () => import('./cost-year2/cost-year2.module').then(m => m.CostYear2Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialsRoutingModule {}
