import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCredentialsComponent } from './add-credentials.component';

const routes: Routes = [{ path: '', component: AddCredentialsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCredentialsRoutingModule { }
