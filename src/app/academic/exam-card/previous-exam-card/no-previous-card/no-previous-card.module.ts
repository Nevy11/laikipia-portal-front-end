import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoPreviousCardRoutingModule } from './no-previous-card-routing.module';
import { NoPreviousCardComponent } from './no-previous-card.component';


@NgModule({
  declarations: [
    NoPreviousCardComponent
  ],
  imports: [
    CommonModule,
    NoPreviousCardRoutingModule
  ]
})
export class NoPreviousCardModule { }
