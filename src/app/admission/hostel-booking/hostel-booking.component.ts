import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { HostelBookingTitleComponent } from './hostel-booking-title/hostel-booking-title.component';
import { HostelBookingContentComponent } from './hostel-booking-content/hostel-booking-content.component';

@Component({
  selector: 'hinv-hostel-booking',
  templateUrl: './hostel-booking.component.html',
  styleUrl: './hostel-booking.component.scss',
})
export class HostelBookingComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(HostelBookingTitleComponent);
    this.vcr.createComponent(HostelBookingContentComponent);
  }
}
