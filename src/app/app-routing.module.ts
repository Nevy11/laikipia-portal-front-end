import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppRepositoryComponent } from './app-repository/app-repository.component';
import { AppTimetableComponent } from './app-timetable/app-timetable.component';
import { TestingComponent } from './testing/testing.component';
import { TestingGuard } from './testing/guards/testing.guard';

const routes: Routes = [
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

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
