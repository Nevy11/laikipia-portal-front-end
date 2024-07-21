import { Component } from '@angular/core';

@Component({
  selector: 'hinv-exam-card-title',
  templateUrl: './exam-card-title.component.html',
  styleUrl: './exam-card-title.component.scss',
})
export class ExamCardTitleComponent {
  schoolName: string = 'LAIKIPIA UNIVERSITY';
  pOBox: string = 'P.O. BOX 1100 – 20300 NYAHURURU, KENYA,';
  cell: string = '+254(0)729281902,+254(0)729285 902';
  email: string = 'info@laikipia.ac.ke web: www.laikipia.ac.ke';
  Tel: string = '+254(0)20 267 1779/1';
}
