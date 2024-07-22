import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefermentRoutingModule } from './deferment-routing.module';
import { DefermentComponent } from './deferment.component';
import { DefermentTitleComponent } from './deferment-title/deferment-title.component';
import { DefermentTableComponent } from './deferment-table/deferment-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DefermentComponent,
    DefermentTitleComponent,
    DefermentTableComponent,
  ],
  imports: [CommonModule, DefermentRoutingModule, MatTableModule],
})
export class DefermentModule {}
