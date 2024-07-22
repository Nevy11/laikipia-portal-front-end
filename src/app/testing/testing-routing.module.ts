import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing.component';
import { TestingGuard } from './guards/testing.guard';

const routes: Routes = [
  {
    path: 'testing',
    component: TestingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingRoutingModule {}
