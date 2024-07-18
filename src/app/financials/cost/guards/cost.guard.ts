import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Finance } from '../../finance';
import { FinanceService } from '../../finance.service';

@Injectable({
  providedIn: 'root',
})
export class CostGuard implements Resolve<Finance[]> {
  constructor(private financeService: FinanceService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Finance[]> {
    // After finishing with the front end intergrate the
    // backend api's with this data
    return this.financeService.expense;
  }
}
