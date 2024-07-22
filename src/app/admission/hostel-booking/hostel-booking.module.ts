import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HostelBookingRoutingModule } from './hostel-booking-routing.module';
import { HostelBookingComponent } from './hostel-booking.component';
import { HostelBookingTitleComponent } from './hostel-booking-title/hostel-booking-title.component';
import { HostelBookingContentComponent } from './hostel-booking-content/hostel-booking-content.component';
import { FormsModule } from '@angular/forms';
import { BookNowComponent } from './hostel-booking-content/book-now/book-now.component';
import { HistoryBookComponent } from './hostel-booking-content/history-book/history-book.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HostelBookingComponent,
    HostelBookingTitleComponent,
    HostelBookingContentComponent,
    BookNowComponent,
    HistoryBookComponent,
  ],
  imports: [
    CommonModule,
    HostelBookingRoutingModule,
    MatButtonToggleModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class HostelBookingModule {}
