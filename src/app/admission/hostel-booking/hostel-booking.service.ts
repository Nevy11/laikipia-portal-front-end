import { Injectable } from '@angular/core';
import { HistoryHostelBooking } from './hostel-booking-content/history-hostel-booking';

@Injectable({
  providedIn: 'root',
})
export class HostelBookingService {
  hostels: HistoryHostelBooking[] = [];
  constructor() {}
}
