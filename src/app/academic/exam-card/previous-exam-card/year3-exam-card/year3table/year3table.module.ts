import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Year3tableRoutingModule } from './year3table-routing.module';
import { Year3tableComponent } from './year3table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [Year3tableComponent],
  imports: [CommonModule, Year3tableRoutingModule, MatTableModule],
})
export class Year3tableModule {}
