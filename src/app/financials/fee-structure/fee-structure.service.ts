import { Injectable } from '@angular/core';
import { PeriodicElement } from './fee-structure';
import { FinanceService } from '../finance.service';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FeeStructureService {
  studentName: string = this.financeService.studentName;
  programme: string = this.financeService.programme;
  course: string = this.financeService.course;
  department: string = this.financeService.department;
  school: string = this.financeService.school;
  regNo: string = this.financeService.regNo;
  admissionYear: number = this.financeService.admissionYear;
  yearOfStudy: string = this.financeService.yearOfStudy;
  term: string = this.financeService.term;
  studentType: string = this.financeService.studentType;
  schoolName: string = this.financeService.schoolName;
  pOBox: string = this.financeService.pOBox;
  Tel: string = this.financeService.Tel;
  email: string = this.financeService.email;
  web: string = this.financeService.web;

  format = 'dd/MM/yyy';
  date = formatDate(17 / 9 / 2019, 'dd/MM/yyyy', 'en-US');

  ELEMENT_DATA: PeriodicElement[] = [
    {
      no: 1,
      date: this.date,
      ref: 1.0079,
      description: 'H',
      debit: 4500,
      credit: 32323,
      balance: 324234,
    },
    {
      no: 2,
      date: this.date,
      ref: 4.0026,
      description: 'He',
      debit: 4500,
      credit: 32323,
      balance: 324234,
    },
  ];
  year = this.financeService.year;
  sem = this.financeService.sem;
  constructor(private financeService: FinanceService) {}
}
