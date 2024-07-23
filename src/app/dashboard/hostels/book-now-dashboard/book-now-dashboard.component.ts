import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { BookNowComponent } from '../../../admission/hostel-booking/hostel-booking-content/book-now/book-now.component';

@Component({
  selector: 'hinv-book-now-dashboard',
  templateUrl: './book-now-dashboard.component.html',
  styleUrl: './book-now-dashboard.component.scss',
})
export class BookNowDashboardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(BookNowComponent);
  }
}
