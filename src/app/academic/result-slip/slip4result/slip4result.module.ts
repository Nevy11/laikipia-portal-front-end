import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Slip4resultRoutingModule } from './slip4result-routing.module';
import { Slip4resultComponent } from './slip4result.component';


@NgModule({
  declarations: [
    Slip4resultComponent
  ],
  imports: [
    CommonModule,
    Slip4resultRoutingModule
  ]
})
export class Slip4resultModule { }
