import { Component, OnInit, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-student-info2',
  templateUrl: './student-info2.component.html',
  styleUrl: './student-info2.component.scss',
})
export class StudentInfo2Component implements OnInit {
  feeStructureService = inject(FeeStructureService);
  studentName: string = this.feeStructureService.studentName;
  programme: string = this.feeStructureService.programme;
  department: string = this.feeStructureService.school;
  school: string = this.feeStructureService.school;
  regNo: string = this.feeStructureService.regNo;
  admissionYear: number = this.feeStructureService.admissionYear;
  yearOfStudy: string = this.feeStructureService.yearOfStudy;
  term: string = this.feeStructureService.term;
  studentType: string = this.feeStructureService.studentType;
  course: string = this.feeStructureService.course;
  ngOnInit(): void {}
}
