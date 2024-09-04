import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragNdropComponent } from './drag-ndrop.component';

const routes: Routes = [{ path: '', component: DragNdropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragNdropRoutingModule {}
