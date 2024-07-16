import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms } from './testing';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor(private http: HttpClient) {}

  roomsData$ = this.http.get<Rooms[]>('/api').pipe();
  cats$ = this.http.get<string[]>('/api/cats');
}
