import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { map } from 'rxjs';
import { FeeStructureService } from './fee-structure.service';
import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'hinv-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrl: './fee-structure.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FeeStructureComponent {
  breakPointObserver = inject(BreakpointObserver);
  isHandset$ = this.breakPointObserver.observe(Breakpoints.Handset).pipe(
    map((data) => {
      return data.matches;
    })
  );
  // ELEMENT_DATA: PeriodicElement[] = this.feeStructureService.ELEMENT_DATA;
  sem = this.dashService.sem;
  year = this.dashService.year;
  admissionYear = this.feeStructureService.admissionYear;
  // @ViewChild('feeStatement', { static: true }) feeStatement!: HTMLBodyElement;
  constructor(
    private feeStructureService: FeeStructureService,
    private dashService: DashboardService
  ) {}
  printDiv(divName: string) {
    const contents = document.getElementById(divName)?.innerHTML;
    const originalContents = document.body.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
  }
}
