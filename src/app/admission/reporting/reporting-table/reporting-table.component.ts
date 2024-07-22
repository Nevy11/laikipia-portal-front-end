import { Component, inject } from '@angular/core';
import { ReportingService } from '../reporting.service';
import { Reporting } from '../reporting';

@Component({
  selector: 'hinv-reporting-table',
  templateUrl: './reporting-table.component.html',
  styleUrl: './reporting-table.component.scss',
})
export class ReportingTableComponent {
  examCardService = inject(ReportingService);
  REPORTINGDATA: Reporting[] = this.examCardService.reportData;
  displayedColumns: string[] = ['semester', 'dateReported', 'Type'];
  dataSource = this.REPORTINGDATA;
}
