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
  { path: 'slip', loadChildren: () => import('./result-slip/slip/slip.module').then(m => m.SlipModule) },
  { path: 'slip2', loadChildren: () => import('./result-slip/slip2-result/slip2-result.module').then(m => m.Slip2ResultModule) },
  { path: 'slip3', loadChildren: () => import('./result-slip/slip3-result/slip3-result.module').then(m => m.Slip3ResultModule) },
  { path: 'slip4', loadChildren: () => import('./result-slip/slip4result/slip4result.module').then(m => m.Slip4resultModule) },
  { path: 'feeClearance', loadChildren: () => import('./exam-card/clear-fees/clear-fees.module').then(m => m.ClearFeesModule) },
  { path: 'previousExamCard', loadChildren: () => import('./exam-card/previous-exam-card/previous-exam-card.module').then(m => m.PreviousExamCardModule) },
  { path: 'specExamCard', loadChildren: () => import('./exam-card/spec-exam-card/spec-exam-card.module').then(m => m.SpecExamCardModule) },
  { path: 'supExamCard', loadChildren: () => import('./exam-card/sup-exam-card/sup-exam-card.module').then(m => m.SupExamCardModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicRoutingModule {}
