import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'testing',
    loadChildren: () =>
      import('./testing/testing.module').then((m) => m.TestingModule),
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
    path: 'schoolTimetable',
    loadChildren: () =>
      import('./school-timetable/school-timetable.module').then(
        (m) => m.SchoolTimetableModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'repository',
    loadChildren: () =>
      import('./repository/repository.module').then((m) => m.RepositoryModule),
  },
  {
    path: 'navigation',
    loadChildren: () =>
      import('./navigation/navigation.module').then((m) => m.NavigationModule),
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('./timetable/timetable.module').then((m) => m.TimetableModule),
  },
  { path: 'dragNdrop', loadChildren: () => import('./drag-ndrop/drag-ndrop.module').then(m => m.DragNdropModule) },

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
