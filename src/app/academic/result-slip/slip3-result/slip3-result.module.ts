import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Slip3ResultRoutingModule } from './slip3-result-routing.module';
import { Slip3ResultComponent } from './slip3-result.component';


@NgModule({
  declarations: [
    Slip3ResultComponent
  ],
  imports: [
    CommonModule,
    Slip3ResultRoutingModule
  ]
})
export class Slip3ResultModule { }
