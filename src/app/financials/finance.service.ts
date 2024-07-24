import { Injectable } from '@angular/core';
import { Finance } from './finance';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  year = this.dashService.year;
  sem = this.dashService.sem;
  paid = this.dashService.paidFees;
  total = this.dashService.totalFees;
  balance = this.dashService.feeBalance;
  studentName: string = this.dashService.studentName;
  programme: string = this.dashService.programme;
  course: string = this.dashService.course;
  department: string = this.dashService.department;
  school: string = this.dashService.school;
  regNo: string = this.dashService.regNo;
  admissionYear: number = this.dashService.admissionYear;
  yearOfStudy: string = this.dashService.yearOfStudy;
  term: string = this.dashService.term;
  studentType: string = this.dashService.studentType;
  schoolName: string = this.dashService.schoolName;
  pOBox: string = this.dashService.pOBox;
  Tel: string = this.dashService.Tel;
  email: string = this.dashService.email;
  web: string = this.dashService.web;
  constructor(private dashService: DashboardService) {}
  expense1: Finance[] = [
    {
      Expenditure: 'Computer power',
      cost: 5000,
    },
    {
      Expenditure: 'Computer Destructions',
      cost: 500,
    },
    {
      Expenditure: 'Labaratory services',
      cost: 2000,
    },
    {
      Expenditure: 'Academic services',
      cost: 135000,
    },
    {
      Expenditure: 'network services',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
  ];
  expense2: Finance[] = [
    {
      Expenditure: 'Computer power',
      cost: 5000,
    },
    {
      Expenditure: 'Computer Destructions',
      cost: 500,
    },
    {
      Expenditure: 'Labaratory services',
      cost: 2000,
    },
    {
      Expenditure: 'Academic services',
      cost: 135000,
    },
    {
      Expenditure: 'network services',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
  ];
  expense3: Finance[] = [
    {
      Expenditure: 'Computer power',
      cost: 5000,
    },
    {
      Expenditure: 'Computer Destructions',
      cost: 500,
    },
    {
      Expenditure: 'Labaratory services',
      cost: 2000,
    },
    {
      Expenditure: 'Academic services',
      cost: 135000,
    },
    {
      Expenditure: 'network services',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
  ];
  expense4: Finance[] = [
    {
      Expenditure: 'Computer power',
      cost: 5000,
    },
    {
      Expenditure: 'Computer Destructions',
      cost: 500,
    },
    {
      Expenditure: 'Labaratory services',
      cost: 2000,
    },
    {
      Expenditure: 'Academic services',
      cost: 135000,
    },
    {
      Expenditure: 'network services',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
    {
      Expenditure: 'Computer power',
      cost: 1500,
    },
  ];
}
