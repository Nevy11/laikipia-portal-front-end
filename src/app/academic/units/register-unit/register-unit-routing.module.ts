import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUnitComponent } from './register-unit.component';

const routes: Routes = [{ path: '', component: RegisterUnitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUnitRoutingModule { }
