import { Injectable } from '@angular/core';
import { PeriodicElement } from './fee-structure';
import { FinanceService } from '../finance.service';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FeeStructureService {
  studentName: string = 'Stephen Mainda Mongare';
  programme: string = 'BACHELOR OF SCIENCE ';
  course: string = 'COMPUTER SCIENCE';
  department: string = 'COMPUTING AND INFORMATICS';
  school: string = 'SCHOOL OF SCIENCE AND APPLIED TECHNOLOGY';
  regNo: string = 'SC/COM/0032/22';
  admissionYear: number = 2020;
  yearOfStudy: string = 'HOLIDAY';
  term: string = 'HOLIDAY';
  studentType: string = 'GSSP'; // consider
  schoolName: string = 'LAIKIPIA UNIVERSITY';
  pOBox: string = 'P.O. Box 1100 – 20300 Nyahururu, Kenya';
  Tel: string = '+254(0)20 267 1779/1';
  email: string = 'abnopayroll@laikipia.ac.ke';
  web: string = 'www.laikipia.ac.ke';

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
    // {
    //   no: 3,
    //   date: this.date,
    //   ref: 6.941,
    //   description: 'Li',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 4,
    //   date: this.date,
    //   ref: 9.0122,
    //   description: 'Be',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 5,
    //   date: new Date(),
    //   ref: 10.811,
    //   description: 'B',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 6,
    //   date: new Date(),
    //   ref: 12.0107,
    //   description: 'C',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 7,
    //   date: new Date(),
    //   ref: 14.0067,
    //   description: 'N',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 8,
    //   date: new Date(),
    //   ref: 15.9994,
    //   description: 'O',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 9,
    //   date: new Date(),
    //   ref: 18.9984,
    //   description: 'F',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
    // {
    //   no: 10,
    //   date: new Date(),
    //   ref: 20.1797,
    //   description: 'Ne',
    //   debit: 4500,
    //   credit: 32323,
    //   balance: 324234,
    // },
  ];
  year = this.financeService.year;
  sem = this.financeService.sem;
  constructor(private financeService: FinanceService) {}
}
