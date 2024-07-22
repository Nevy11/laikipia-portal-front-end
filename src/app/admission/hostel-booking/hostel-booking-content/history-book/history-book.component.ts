import { Component, inject } from '@angular/core';
import { HistoryHostelBooking } from '../history-hostel-booking';
import { HostelBookingService } from '../../hostel-booking.service';

@Component({
  selector: 'hinv-history-book',
  templateUrl: './history-book.component.html',
  styleUrl: './history-book.component.scss',
})
export class HistoryBookComponent {
  displayedColumns: string[] = ['room', 'term', 'date', 'hostel', 'status'];
  hostelBookingService = inject(HostelBookingService);
  dataSource = this.hostelBookingService.hostels;
  lDataSource = this.dataSource.length;
}
