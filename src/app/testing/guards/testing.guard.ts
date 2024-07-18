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
export class TestingGuard implements Resolve<Rooms[]> {
  constructor(private testingService: TestingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Rooms[]> {
    return this.testingService.getAllRooms();
  }
}
