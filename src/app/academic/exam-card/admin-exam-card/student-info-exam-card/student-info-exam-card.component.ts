import { Component } from '@angular/core';

@Component({
  selector: 'hinv-student-info-exam-card',
  templateUrl: './student-info-exam-card.component.html',
  styleUrl: './student-info-exam-card.component.scss',
})
export class StudentInfoExamCardComponent {
  studentName: string = 'Stephen Mainda Mongare';
  programme: string = 'BACHELOR OF SCIENCE (COMPUTER SCIENCE)';
  session: string = 'HOLIDAY';
  regNo: string = 'SC/COM/0032/22';
  class: string = 'COMP/MC/FT/OCT/2022';
  SerialNo: string = '0494225090';
}
