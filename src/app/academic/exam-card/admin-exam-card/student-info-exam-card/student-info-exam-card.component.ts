import { Component } from '@angular/core';
import { ExamCardService } from '../../exam-card.service';

@Component({
  selector: 'hinv-student-info-exam-card',
  templateUrl: './student-info-exam-card.component.html',
  styleUrl: './student-info-exam-card.component.scss',
})
export class StudentInfoExamCardComponent {
  studentName: string = this.examService.officialStudentName;
  programme: string = this.examService.officialProgramme;
  session: string = this.examService.officialSession;
  regNo: string = this.examService.officialRegNo;
  class: string = this.examService.officialClass;
  SerialNo: string = this.examService.officialSerialNo;
  constructor(private examService: ExamCardService) {}
}
