import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearFeesRoutingModule } from './clear-fees-routing.module';
import { ClearFeesComponent } from './clear-fees.component';


@NgModule({
  declarations: [
    ClearFeesComponent
  ],
  imports: [
    CommonModule,
    ClearFeesRoutingModule
  ]
})
export class ClearFeesModule { }
