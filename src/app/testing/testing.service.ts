import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms } from './testing';
import { filter, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor(private http: HttpClient) {}

  roomsData$ = this.http.get<Rooms[]>('http://localhost:3000/api/rooms').pipe();
  cats$ = this.http.get<string[]>('http://localhost:10000/api/rooms');
  jokes$ = this.http
    .get<any>('http://localhost:3005/random_joke')
    .pipe(filter((data) => data.setup));

  addRoom() {
    const body = {
      roomNumber: 43,
      roomType: 'single Room',
      amenities: 'computer, desk sink, table',
      price: 5000,
      photos: 'http://localhost:4990',
      checkinTime: new Date().setFullYear(2003, 7, 16),
      checkoutTime: new Date().setFullYear(2024, 7, 12),
      rating: 3.4,
    };
    return this.http.post<Rooms>('http://localhost:10000/api/rooms', body, {
      // reportProgress: true,
    });
  }
  getRoom(id: string) {
    return this.http.get<Rooms>(`http://localhost:10000/api/rooms/${id}`);
  }
  // crud
  updateRoom(id: string) {
    const body = {
      roomNumber: id,
      roomType: 'single Room',
      amenities: 'Hot shower table',
      price: 5000,
      photos: 'http://localhost:4990',
      checkinTime: new Date().setFullYear(2003, 7, 16),
      checkoutTime: new Date().setFullYear(2024, 7, 12),
      rating: 8.43,
    };
    return this.http.put<Rooms[]>(
      `http://localhost:10000/api/rooms/${id}`,
      body,
      {}
    );
  }
  deleteRoom(id: string) {
    return this.http.delete<Rooms>(`http://localhost:10000/api/rooms/${id}`);
  }
  getAllRooms() {
    return this.http.get<Rooms[]>('http://localhost:10000/api/rooms');
  }
}
