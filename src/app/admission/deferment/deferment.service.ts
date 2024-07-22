import { Injectable } from '@angular/core';
import { Deferment } from './deferment';

@Injectable({
  providedIn: 'root',
})
export class DefermentService {
  defermentData: Deferment[] = [];
  constructor() {}
}
