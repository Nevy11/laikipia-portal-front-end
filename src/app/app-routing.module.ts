import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppRepositoryComponent } from './app-repository/app-repository.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AppDashComponent,
  },
  {
    path: 'repository',
    component: AppRepositoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
