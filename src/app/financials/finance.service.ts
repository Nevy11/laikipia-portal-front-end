import { Injectable } from '@angular/core';
import { Finance } from './finance';
import { AppRepositoryService } from '../repository/app-repository.service';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  year = this.dashService.year;
  sem = this.dashService.sem;
  paid = 95000;
  total = 10500;
  balance = this.paid - this.total;
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
  constructor(private dashService: DashboardService) {}
  expense: Finance[] = [
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
