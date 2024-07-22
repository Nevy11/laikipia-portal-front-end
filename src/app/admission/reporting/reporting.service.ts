import { Injectable } from '@angular/core';
import { Reporting } from './reporting';

@Injectable({
  providedIn: 'root',
})
export class ReportingService {
  reportData: Reporting[] = [
    {
      semester: 'SEMESTER 2 2023/2024',
      dateReported: '1/6/2024 10:44:51 AM',
      Type: 'Reported Online',
    },
    {
      semester: 'SEMESTER 2 2023/2024',
      dateReported: '1/6/2024 10:44:51 AM',
      Type: 'Reported Online',
    },
    {
      semester: 'SEMESTER 2 2023/2024',
      dateReported: '1/6/2024 10:44:51 AM',
      Type: 'Reported Online',
    },
    {
      semester: 'SEMESTER 2 2023/2024',
      dateReported: '1/6/2024 10:44:51 AM',
      Type: 'Reported Online',
    },
  ];
  constructor() {}
}
