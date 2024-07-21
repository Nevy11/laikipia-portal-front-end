import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppRepositoryComponent } from './app-repository/app-repository.component';
import { AppTimetableComponent } from './app-timetable/app-timetable.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AppDashComponent,
  },
  {
    path: 'testing',
    loadChildren: () =>
      import('./testing/testing.module').then((m) => m.TestingModule),
  },
  {
    path: 'repository',
    component: AppRepositoryComponent,
  },
  {
    path: 'timetable',
    component: AppTimetableComponent,
  },

  {
    path: 'finance',
    loadChildren: () =>
      import('./financials/financials.module').then((m) => m.FinancialsModule),
  },
  {
    path: 'academic',
    loadChildren: () =>
      import('./academic/academic.module').then((m) => m.AcademicModule),
  },
  {
    path: 'assistant',
    loadChildren: () =>
      import('./assistant/assistant.module').then((m) => m.AssistantModule),
  },
  {
    path: 'socials',
    loadChildren: () =>
      import('./socials/socials.module').then((m) => m.SocialsModule),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./message/message.module').then((m) => m.MessageModule),
  },
  {
    path: 'admission',
    loadChildren: () =>
      import('./admission/admission.module').then((m) => m.AdmissionModule),
  },
  {
    path: 'evaluations',
    loadChildren: () =>
      import('./evaluations/evaluations.module').then(
        (m) => m.EvaluationsModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
