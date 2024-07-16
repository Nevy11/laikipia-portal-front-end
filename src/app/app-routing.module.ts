import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppRepositoryComponent } from './app-repository/app-repository.component';
import { AppTimetableComponent } from './app-timetable/app-timetable.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AppDashComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
