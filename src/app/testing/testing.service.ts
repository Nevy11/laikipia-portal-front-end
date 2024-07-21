import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms } from './testing';
import { filter, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestingService {}
