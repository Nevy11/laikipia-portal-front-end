import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Year2tableRoutingModule } from './year2table-routing.module';
import { Year2tableComponent } from './year2table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [Year2tableComponent],
  imports: [CommonModule, Year2tableRoutingModule, MatTableModule],
})
export class Year2tableModule {}
