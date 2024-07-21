import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelBookingComponent } from './hostel-booking.component';

const routes: Routes = [{ path: '', component: HostelBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelBookingRoutingModule { }
