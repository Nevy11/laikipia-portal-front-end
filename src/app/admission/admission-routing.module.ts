import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';

const routes: Routes = [{ path: '', component: AdmissionComponent }, { path: 'reporting', loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule) }, { path: 'hostelBooking', loadChildren: () => import('./hostel-booking/hostel-booking.module').then(m => m.HostelBookingModule) }, { path: 'deferment', loadChildren: () => import('./deferment/deferment.module').then(m => m.DefermentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
