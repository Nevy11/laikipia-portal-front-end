import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ReportingTitleComponent } from './reporting-title/reporting-title.component';
import { ReportingTableComponent } from './reporting-table/reporting-table.component';

@Component({
  selector: 'hinv-reporting',
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.scss',
})
export class ReportingComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(ReportingTitleComponent);
    this.vcr.createComponent(ReportingTableComponent);
  }
}
