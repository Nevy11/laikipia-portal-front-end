import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostelBookingRoutingModule } from './hostel-booking-routing.module';
import { HostelBookingComponent } from './hostel-booking.component';


@NgModule({
  declarations: [
    HostelBookingComponent
  ],
  imports: [
    CommonModule,
    HostelBookingRoutingModule
  ]
})
export class HostelBookingModule { }
