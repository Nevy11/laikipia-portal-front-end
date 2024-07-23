import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { HistoryBookComponent } from '../../../admission/hostel-booking/hostel-booking-content/history-book/history-book.component';

@Component({
  selector: 'hinv-history-book-hostels',
  templateUrl: './history-book-hostels.component.html',
  styleUrl: './history-book-hostels.component.scss',
})
export class HistoryBookHostelsComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(HistoryBookComponent);
  }
}
