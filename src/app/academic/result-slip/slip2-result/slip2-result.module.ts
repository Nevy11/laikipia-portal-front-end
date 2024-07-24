import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Slip2ResultRoutingModule } from './slip2-result-routing.module';
import { Slip2ResultComponent } from './slip2-result.component';


@NgModule({
  declarations: [
    Slip2ResultComponent
  ],
  imports: [
    CommonModule,
    Slip2ResultRoutingModule
  ]
})
export class Slip2ResultModule { }
