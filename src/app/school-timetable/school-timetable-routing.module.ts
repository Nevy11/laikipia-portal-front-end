import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolTimetableComponent } from './school-timetable.component';

const routes: Routes = [{ path: '', component: SchoolTimetableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolTimetableRoutingModule { }
