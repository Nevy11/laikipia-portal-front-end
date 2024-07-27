import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms, myData } from './testing';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor(private http: HttpClient) {}

  // addName = this.http.post('http://localhost:3000/todos', { title: 'Lion' });

  // getData$ = this.http.get('http://localhost:3000/todos');
  // id = 4;
  // myId = 14;
  // updateName$ = this.http.put(`http://localhost:3000/todos/${this.myId}`, {
  //   title: 'Cows',
  // });

  // deleteName$ = this.http.delete(`http://localhost:3000/todos/${this.id}`);
}
