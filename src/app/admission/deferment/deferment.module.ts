import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefermentRoutingModule } from './deferment-routing.module';
import { DefermentComponent } from './deferment.component';


@NgModule({
  declarations: [
    DefermentComponent
  ],
  imports: [
    CommonModule,
    DefermentRoutingModule
  ]
})
export class DefermentModule { }
