import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ReportingComponent } from './reporting/reporting.component';
import { HostelBookingComponent } from './hostel-booking/hostel-booking.component';
import { DefermentComponent } from './deferment/deferment.component';

@Component({
  selector: 'hinv-admission',
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss',
})
export class AdmissionComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ReportingComponent);
    this.vcr.createComponent(HostelBookingComponent);
    this.vcr.createComponent(DefermentComponent);
  }
}
