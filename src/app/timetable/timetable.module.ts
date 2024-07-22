import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './timetable.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [TimetableComponent],
  imports: [CommonModule, TimetableRoutingModule, MatPaginatorModule],
})
export class TimetableModule {}
