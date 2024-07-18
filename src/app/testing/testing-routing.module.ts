import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing.component';
import { TestingGuard } from './guards/testing.guard';

const routes: Routes = [
  {
    path: '',
    component: TestingComponent,
    resolve: {
      rooms: TestingGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingRoutingModule {}
