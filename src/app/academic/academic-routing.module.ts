import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic.component';

const routes: Routes = [
  {
    path: '',
    component: AcademicComponent,
    children: [
      {
        path: 'registerUnit',
        loadChildren: () =>
          import('./units/register-unit/register-unit.module').then(
            (m) => m.RegisterUnitModule
          ),
      },
      {
        path: 'unitHistory',
        loadChildren: () =>
          import('./units/unit-history/unit-history.module').then(
            (m) => m.UnitHistoryModule
          ),
      },
      {
        path: 'curriculum',
        loadChildren: () =>
          import('./units/curriculum/curriculum.module').then(
            (m) => m.CurriculumModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicRoutingModule {}
