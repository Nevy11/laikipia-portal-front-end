import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // studentName: string = 'Stephen Mainda';
  studentFirstName: string = 'Stephen';
  studentMiddleName: string = 'Mainda';
  studentLastName: string = 'Mongare';
  // phoneStudentName: string = 'Stephen';
  regNo: string = 'SC/COM/0032/22';
  year: number = 2;
  sem: number = 2;

  progressValue: number = 70;
  // course: string = 'Bachelor of science(Computer Science';
  // officialStudentName: string = 'Stephen Mainda Mongare';
  // programme: string = 'BACHELOR OF SCIENCE (COMPUTER SCIENCE)';
  session: string = 'HOLIDAY';
  // officialRegNo: string = 'SC/COM/0032/22';
  class: string = 'COMP/MC/FT/OCT/2022';
  serialNo: string = '0494225090';
  admissionYear: number = 2020;
  isRegistrationOpen: boolean = true;
  paidFees = 95000;
  totalFees = 10500;
  feeBalance: number = this.paidFees - this.totalFees;
  // balance = this.paid - this.total;
  studentName: string = 'Stephen Mainda Mongare';
  programme: string = 'BACHELOR OF SCIENCE ';
  course: string = 'COMPUTER SCIENCE';
  department: string = 'COMPUTING AND INFORMATICS';
  school: string = 'SCHOOL OF SCIENCE AND APPLIED TECHNOLOGY';
  // regNo: string = 'SC/COM/0032/22';
  // admissionYear: number = 2020;
  yearOfStudy: string = 'HOLIDAY';
  term: string = 'HOLIDAY';
  studentType: string = 'GSSP'; // consider
  schoolName: string = 'LAIKIPIA UNIVERSITY';
  pOBox: string = 'P.O. Box 1100 – 20300 Nyahururu, Kenya';
  Tel: string = '+254(0)20 267 1779/1';
  email: string = 'abnopayroll@laikipia.ac.ke';
  web: string = 'www.laikipia.ac.ke';
  constructor() {}
}
