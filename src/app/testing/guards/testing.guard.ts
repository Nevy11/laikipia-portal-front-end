import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Rooms } from '../testing';
import { TestingService } from '../testing.service';

@Injectable({
  providedIn: 'root',
})
export class TestingGuard {
  constructor(private testingService: TestingService) {}
}
