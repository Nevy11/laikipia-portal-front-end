import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { StudentInfo2Component } from '../student-info2/student-info2.component';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss',
})
export class StudentInfoComponent implements OnInit {
  feeStructureService = inject(FeeStructureService);
  studentName: string = this.feeStructureService.studentName;
  programme: string = this.feeStructureService.programme;
  department: string = this.feeStructureService.department;
  school: string = this.feeStructureService.school;
  regNo: string = this.feeStructureService.regNo;
  admissionYear: number = this.feeStructureService.admissionYear;
  yearOfStudy: string = this.feeStructureService.yearOfStudy;
  term: string = this.feeStructureService.term;
  studentType: string = this.feeStructureService.studentType;
  course: string = this.feeStructureService.course;
  ngOnInit(): void {}
}
