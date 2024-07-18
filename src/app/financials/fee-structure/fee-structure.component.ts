import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { map } from 'rxjs';
import { PeriodicElement } from './fee-structure';
import { FeeStructureService } from './fee-structure.service';

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
  ELEMENT_DATA: PeriodicElement[] = this.feeStructureService.ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  sem = this.feeStructureService.sem;
  year = this.feeStructureService.year;
  admissionYear = this.feeStructureService.admissionYear;
  // @ViewChild('feeStatement', { static: true }) feeStatement!: HTMLBodyElement;
  constructor(private feeStructureService: FeeStructureService) {}
  printDiv(divName: string) {
    const contents = document.getElementById(divName)?.innerHTML;
    const originalContents = document.body.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
  }
}
