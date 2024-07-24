import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableSpecRoutingModule } from './table-spec-routing.module';
import { TableSpecComponent } from './table-spec.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableSpecComponent],
  imports: [CommonModule, TableSpecRoutingModule, MatTableModule],
})
export class TableSpecModule {}
